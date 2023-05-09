import * as React from 'react';

import {StyleSheet} from 'react-native';

import {colors} from '@app/theme';
import {s} from '@app/utils/scales';

import Button, {IButtonProps} from './button';

interface OutlineButtonProps extends IButtonProps {}

const OutlineButton = (props: OutlineButtonProps) => {
  const {style, ...otherProps} = props;
  return <Button {...otherProps} style={[styles.outlineBtn, style]} />;
};

export default OutlineButton;

const styles = StyleSheet.create({
  outlineBtn: {
    borderWidth: s(1),
    borderRadius: s(6),
    borderColor: colors.border,
    paddingVertical: s(8),
    paddingHorizontal: s(12),
  },
});
