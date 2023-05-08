import {ROUTE_NAME} from '@app/navigators';
import {useNavigation} from '@react-navigation/native';

const useGetStartController = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(ROUTE_NAME.Login, {
      obscureBackground: false,
      animation: 'fade',
    });
  };

  return {
    goToLogin,
  };
};

export default useGetStartController;
