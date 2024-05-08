import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const scaleSize = (size: number) => scale(size);

export const verticalScaleSize = (size: number) => verticalScale(size);

export const moderateScaleSize = (size: number, factor?: number) =>
  moderateScale(size, factor);
