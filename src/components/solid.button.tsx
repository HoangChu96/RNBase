import * as React from 'react';

import {StyleSheet} from 'react-native';

import {colors} from '@app/theme';
import {s} from '@app/utils/scales';

import Button, {IButtonProps} from './button';

interface SolidButtonProps extends IButtonProps {
  bgColor?: string;
}

const SolidButton = (props: SolidButtonProps) => {
  const {style, bgColor = colors.primary, ...otherProps} = props;
  return (
    <Button
      {...otherProps}
      style={[
        styles.solidBtn,
        style,
        {
          backgroundColor: bgColor,
        },
      ]}
      textStyle={styles.text}
      tinColor={otherProps.tinColor ?? colors.white}
    />
  );
};

export default SolidButton;

const styles = StyleSheet.create({
  solidBtn: {
    borderRadius: s(6),
    paddingVertical: s(8),
    paddingHorizontal: s(12),
  },
  text: {
    color: colors.white,
  },
});
