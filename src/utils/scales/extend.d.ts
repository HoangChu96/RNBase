import * as RN from 'react-native';

import {StringifiedStyles} from './index.d';

export function scale(size: number): number;
export function verticalScale(size: number): number;
export function moderateScale(size: number, factor?: number): number;
export function moderateVerticalScale(size: number, factor?: number): number;
export function s(size: number): number;
export function vs(size: number): number;
export function ms(size: number, factor?: number): number;
export function mvs(size: number, factor?: number): number;

export namespace ScaledSheet {
  export function create<
    T extends RN.StyleSheet.NamedStyles<T> | RN.StyleSheet.NamedStyles<any>,
  >(
    stylesObject: T,
  ): {
    [P in keyof T]: RN.RegisteredStyle<
      T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>
    >;
  };
}
