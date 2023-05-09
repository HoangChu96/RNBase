import * as React from 'react';

import {
  Insets,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

import {hitSlop as BaseHitSlop} from '@app/utils/styles';

enum IConType {
  rounded = 'rounded',
  square = 'square',
}

interface IProps {
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  testID?: string;
  hitSlop?: Insets | undefined;
  variant?: 'rounded' | 'square' | 'none';
}

const IconButton = (props: IProps & FastImageProps) => {
  const {
    testID,
    hitSlop = BaseHitSlop,
    style,
    onPress = () => {},
    variant = 'none',
    ...otherProps
  } = props;

  return (
    <TouchableOpacity
      testID={testID}
      disabled={props.disable ?? false}
      style={[
        {
          opacity: props.disable ? 0.5 : 1,
        },
        props.buttonStyle,
      ]}
      onPress={onPress}
      hitSlop={hitSlop}>
      <FastImage
        style={[styles.icon, style, styles[variant]]}
        resizeMode="contain"
        {...otherProps}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {},
  icon: {
    width: 24,
    height: 24,
  },
  rounded: {
    borderRadius: 1000,
  },
  square: {
    borderRadius: 6,
  },
  none: {},
});
