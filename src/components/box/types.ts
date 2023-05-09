import {ViewProps} from 'react-native';

import {ITextProps} from '../text';

export type ResponsiveValue<T> = T | null | undefined | Array<T | null>;

export interface ILinearGradientProps {
  linearGradient?: {
    colors: Array<string>;
    start?: Array<number>;
    end?: Array<number>;
    locations?: Array<number>;
  };
}

export interface InterfaceBoxProps<T = null> extends ViewProps {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  // /**
  //  * Applies box shadow and accepts a number from 0 to 9
  //  * @default 0
  //  */
  // shadow?: number;
  /**
   * For providing props to Text inside Box
   */
  _text?: Partial<ITextProps>;
  bg?: ResponsiveValue<(string & {}) | ILinearGradientProps>;
  background?: ResponsiveValue<(string & {}) | ILinearGradientProps>;
  bgColor?: ResponsiveValue<(string & {}) | ILinearGradientProps>;
  backgroundColor?: ResponsiveValue<(string & {}) | ILinearGradientProps>;
  // gap?: ResponsiveValue<number | string>;
}

export type IBoxProps<T = null> = InterfaceBoxProps<T>;
