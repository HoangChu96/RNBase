import * as React from 'react';

import {
  OpaqueColorValue,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';

import {colors} from '@app/theme';
import size from '@app/utils/fontsize';
import {s} from '@app/utils/scales';
import {hitSlopMedium} from '@app/utils/styles';

import Space from './space';

interface ITextInputProps extends TextInputProps {
  leadingIcon?: number | Source | undefined;
  trailingIcon?: number | Source | undefined;
  space?: number | undefined;
  tinColor?: string | OpaqueColorValue | undefined;
}

const TextInput = (props: ITextInputProps) => {
  const {
    style,
    placeholder = 'TextInput component',
    leadingIcon,
    trailingIcon,
    space = 5,
    tinColor,
    ...otherProps
  } = props;
  return (
    <View style={styles.input}>
      {leadingIcon && (
        <>
          <TouchableOpacity hitSlop={hitSlopMedium}>
            <FastImage
              source={leadingIcon}
              style={styles.icon}
              tintColor={tinColor}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Space space={space} />
        </>
      )}
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textDim}
        {...otherProps}
        style={[styles.base, style]}>
        {otherProps.children}
      </RNTextInput>
      {trailingIcon && (
        <>
          <Space space={space} />
          <TouchableOpacity hitSlop={hitSlopMedium}>
            <FastImage
              source={trailingIcon}
              style={styles.icon}
              tintColor={tinColor}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: s(1),
    borderRadius: s(6),
    flex: 1,
    paddingHorizontal: s(12),
    paddingVertical: s(8),
  },
  base: {
    fontSize: size.size_13,
    color: colors.text,
    flex: 1,
    alignSelf: 'flex-start',
    paddingTop: 0,
  },
  icon: {
    width: s(14),
    height: s(14),
  },
});
