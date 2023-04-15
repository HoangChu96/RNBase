import {Keyboard} from 'react-native';

import {ROUTE_NAME} from '@app/navigators';
import {useNavigation} from '@react-navigation/native';

const useRegisterController = () => {
  const navigation = useNavigation();

  const onDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const goToLoginAccount = () => {
    navigation.navigate(ROUTE_NAME.Login, {
      obscureBackground: false,
      animation: 'fade',
    });
  };

  return {onDismissKeyboard, goToLoginAccount};
};

export default useRegisterController;
