import {
  I18n,
  TranslateOptions,
} from 'i18n-js';
import memoize from 'lodash.memoize';
import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';

// import en from './translation/en.json';
// import no from './translation/no.json';

export enum ELang {
  US = 'US',
  NO = 'NO',
  VN = 'VN',
}

const translationGetters: any = {
  no: () => require('./translation/no.json'),
  en: () => require('./translation/en.json'),
};

const i18n = new I18n();

export const translate: any = memoize(
  (key: any, config?: any) => i18n.t(key, config),
  (key: any, config?: any) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = (locale?: string) => {
  // fallback if no available language fits
  if (locale === 'vn') {
    locale = 'vi';
  } // khác nhau với list country trong datasource
  const fallback = {languageTag: 'no', isRTL: false};

  let {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  if (locale) {
    languageTag = convertLocale(locale);
  }

  // clear translation cache
  translate.cache.clear();

  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config

  i18n.translations = {
    [languageTag]: translationGetters[languageTag](),
  };
  i18n.locale = languageTag;
};

export const convertLocale = (locale: string): string => {
  if (locale === ELang.US) {
    locale = 'en';
  }
  if (locale === ELang.VN) {
    locale = 'en';
  }
  if (locale === ELang.NO) {
    locale = 'no';
  }
  return locale.toLocaleLowerCase();
};

export const currentLocale = (): string => {
  return i18n.locale;
};

export const missingTranslation = (
  scope: string,
  options?: TranslateOptions,
): boolean => {
  let message = i18n.t(scope, options);

  if (typeof message === 'object') {
    return false;
  }
  return message.includes('missing');
};

export const isEnglish = () => {
  return i18n.locale === 'en';
};
