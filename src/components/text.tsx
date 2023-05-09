import * as React from 'react';

import {
  StyleSheet,
  Text as RNText,
  TextProps,
} from 'react-native';

import {colors} from '@app/theme';
import size from '@app/utils/fontsize';

export interface ITextProps extends TextProps {}

const Text = (props: ITextProps) => {
  const {style, ...otherProps} = props;
  return (
    <RNText {...otherProps} style={[styles.base, style]}>
      {otherProps.children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  base: {
    fontSize: size.size_13,
    color: colors.text,
  },
});
