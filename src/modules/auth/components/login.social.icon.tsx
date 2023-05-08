import * as React from 'react';

import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import Space from '@app/components/space';
import {colors} from '@app/theme';
import {isIOS} from '@app/utils/constants';
import images from '@app/utils/images';
import {commonStyles} from '@app/utils/styles';

interface LoginSocialIconProps {
  onPressGoogle: ((event: GestureResponderEvent) => void) | undefined;
  onPressFacebook: ((event: GestureResponderEvent) => void) | undefined;
  onPressApple: ((event: GestureResponderEvent) => void) | undefined;
}

const IconButton = ({
  icon,
  onPress,
}: {
  icon: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FastImage source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const LoginSocialIcon = (props: LoginSocialIconProps) => {
  return (
    <View style={styles.container}>
      <IconButton icon={images.ic_google} onPress={props.onPressGoogle} />
      <Space space={16} />
      <IconButton icon={images.ic_fb} onPress={props.onPressFacebook} />
      <Space space={16} />
      {isIOS && (
        <IconButton icon={images.ic_apple} onPress={props.onPressApple} />
      )}
    </View>
  );
};

export default LoginSocialIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    ...commonStyles.shadow,
    width: 45,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  icon: {
    height: 30,
    width: 30,
  },
  space: {
    width: 16,
  },
});
