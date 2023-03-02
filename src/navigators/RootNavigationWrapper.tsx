import React from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  navigationRef,
  ROUTE_NAME,
} from './';

export type RootStackParamList = {
  [ROUTE_NAME.Splash]: undefined;
  [ROUTE_NAME.Login]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigationWrapper() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ROUTE_NAME.Splash}>
        <Stack.Screen name={ROUTE_NAME.Splash} component={SplashScreen} />
        <Stack.Screen name={ROUTE_NAME.Login} component={LoginScreen} />
        <Stack.Screen name={ROUTE_NAME.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Button
        testID="goto-login"
        onPress={() => navigationRef.current?.navigate(ROUTE_NAME.Login)}
        title="Go to Login Screen"
      />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View testID="login-screen">
      <Text>LoginScreen</Text>
      <Button
        testID="login-button"
        onPress={() => navigationRef.current?.navigate(ROUTE_NAME.Home)}
        title="Login"
      />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View testID="home-screen">
      <Text>Welcome HomeScreen</Text>
    </View>
  );
};
