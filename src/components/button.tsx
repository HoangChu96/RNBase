import * as React from 'react';

import {
  OpaqueColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';

import {s} from '@app/utils/scales';

import Space from './space';
import Text from './text';

export interface IButtonProps extends TouchableOpacityProps {
  leadingIcon?: number | Source | undefined;
  trailingIcon?: number | Source | undefined;
  textStyle?: StyleProp<TextStyle>;
  label: string;
  space?: number | undefined;
  tinColor?: string | OpaqueColorValue | undefined;
}

const Button = (props: IButtonProps) => {
  const {
    style,
    leadingIcon,
    trailingIcon,
    textStyle,
    label,
    space = 5,
    tinColor,
    ...otherProps
  } = props;
  return (
    <TouchableOpacity {...otherProps} style={[styles.button, style]}>
      {leadingIcon && (
        <>
          <FastImage
            source={leadingIcon}
            style={styles.icon}
            tintColor={tinColor}
            resizeMode="contain"
          />
          <Space space={space} />
        </>
      )}
      <Text style={textStyle}>{label}</Text>
      {trailingIcon && (
        <>
          <Space space={space} />
          <FastImage
            source={trailingIcon}
            style={styles.icon}
            tintColor={tinColor}
            resizeMode="contain"
          />
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: s(14),
    height: s(14),
  },
});
