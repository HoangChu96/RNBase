import {Dimensions} from 'react-native';

const {SIZE_MATTERS_BASE_HEIGHT, SIZE_MATTERS_BASE_WIDTH} = env;

export const {
  width,
  height,
  fontScale,
  scale: scale1,
} = Dimensions.get('window');
let [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 350;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 680;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
