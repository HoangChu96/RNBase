import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from './lib/extend/scaling-utils.extend';
import scaledSheetCreator from './lib/ScaledSheet';

export const ScaledSheet = scaledSheetCreator(
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
);
export * from './lib/extend/scaling-utils.extend';
