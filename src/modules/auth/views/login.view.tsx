import * as React from 'react';

import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Text from '@app/components/text';
import {colors} from '@app/theme';
import images from '@app/utils/images';

import LoginSocialIcon from '../components/login.social.icon';
import useLoginController from '../controllers/useLoginController';

interface LoginViewProps {}

const Input = ({title}: {title: string}) => {
  return (
    <View>
      <Text style={styles.description}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const LoginView = (props: LoginViewProps) => {
  const {
    onDismissKeyboard,
    goToRegisterAccount,
    goToForgotPassword,
    onPressGoogleAuth,
    onPressFacebookAuth,
    onPressAppleAuth,
  } = useLoginController();

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      resizeMode="cover">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onDismissKeyboard}
        style={styles.flex}>
        <View style={styles.content}>
          <KeyboardAvoidingView behavior="padding">
            <Text style={styles.title}>Login</Text>
            <View>
              <Input title="Email" />
              <Input title="Password" />
            </View>
            <View style={styles.forgotPass}>
              <Text
                style={[styles.baseTxt, styles.bold]}
                onPress={goToForgotPassword}>
                Forgot Password?
              </Text>
            </View>
            <LoginSocialIcon
              onPressGoogle={onPressGoogleAuth}
              onPressApple={onPressAppleAuth}
              onPressFacebook={onPressFacebookAuth}
            />
          </KeyboardAvoidingView>
        </View>
        <SafeAreaView style={styles.bottom}>
          <Text style={styles.newHere}>
            New Here?
            <Text style={styles.register} onPress={goToRegisterAccount}>
              {' '}
              Register
            </Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex: {
    // justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 60,
    height: 70,
  },
  content: {
    marginLeft: 20,
    flex: 5,
    justifyContent: 'flex-end',
    width: '80%',
  },
  baseTxt: {
    fontSize: 14,
    color: colors.primary,
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 36,
    color: colors.primary,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: colors.primary,
    marginVertical: 10,
  },
  forgotPass: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  button: {
    borderRadius: 7,
    borderColor: colors.white,
    borderWidth: 1,
    height: 60,
    width: 144,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 24,
    color: colors.white,
  },
  newHere: {
    fontSize: 16,
    color: colors.white,
  },
  register: {
    fontWeight: 'bold',
  },

  // input
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 12,
    borderColor: colors.primary,
    // width: '80%',
    marginBottom: 10,
  },
});
