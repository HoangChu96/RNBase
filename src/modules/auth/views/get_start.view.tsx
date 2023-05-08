import * as React from 'react';

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {colors} from '@app/theme';
import images from '@app/utils/images';

import useGetStartController from '../controllers/useGetStartController';

const GetStartView = () => {
  const {goToLogin} = useGetStartController();

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      resizeMode="cover">
      <SafeAreaView
        style={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <View style={styles.content}>
          <FastImage
            source={images.ic_welcome}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.title}>Lorem</Text>
          <Text style={styles.description}>
            consequat duis{'\n'}enim velit{' '}
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={goToLogin}>
            <Text style={styles.buttonTxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GetStartView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  icon: {
    width: 60,
    height: 70,
  },
  content: {
    marginLeft: 50,
    flex: 3,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 36,
    color: colors.primary,
    opacity: 0.7,
  },
  description: {
    fontSize: 24,
    color: colors.primary,
    opacity: 0.7,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    borderRadius: 7,
    borderColor: colors.white,
    borderWidth: 1,
    height: 60,
    width: 144,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  buttonTxt: {
    fontSize: 24,
    color: colors.white,
  },
});
