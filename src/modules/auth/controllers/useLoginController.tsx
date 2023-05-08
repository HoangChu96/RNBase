import {useEffect} from 'react';

import {Keyboard} from 'react-native';

import {ROUTE_NAME} from '@app/navigators';
import {useNavigation} from '@react-navigation/native';

import useAuthorization from '../models/social-auth/useAuthorization';

const useLoginController = () => {
  const navigation = useNavigation();
  const {handleLoginGoogle, handleLoginFacebook, handleLoginApple} =
    useAuthorization();

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', () => {});
    Keyboard.addListener('keyboardWillHide', () => {});
  }, []);

  const onDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const goToRegisterAccount = () => {
    navigation.navigate(ROUTE_NAME.Register, {
      obscureBackground: false,
      animation: 'fade',
    });
  };

  const goToForgotPassword = () => {
    navigation.navigate(ROUTE_NAME.ForgotPassword, {
      obscureBackground: false,
      animation: 'fade',
    });
  };

  const onPressGoogleAuth = () => {
    handleLoginGoogle();
  };

  const onPressFacebookAuth = () => {
    handleLoginFacebook();
  };

  const onPressAppleAuth = () => {
    handleLoginApple();
  };

  return {
    onDismissKeyboard,
    goToRegisterAccount,
    goToForgotPassword,
    onPressGoogleAuth,
    onPressFacebookAuth,
    onPressAppleAuth,
  };
};

export default useLoginController;
