import scaledSheetCreator from './lib/ScaledSheet';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from './lib/scaling-utils';

export const ScaledSheet = scaledSheetCreator(
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
);
export * from './lib/scaling-utils';
