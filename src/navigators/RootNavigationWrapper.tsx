import React from 'react';

import {View} from 'react-native';

import ForgotPasswordView from '@app/modules/auth/views/forgot.password.view';
import GetStartView from '@app/modules/auth/views/get_start.view';
import LoginView from '@app/modules/auth/views/login.view';
import RegisterView from '@app/modules/auth/views/register.view';
import DemoComponentScreen from '@app/modules/demo/component.demo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  navigationRef,
  ROUTE_NAME,
} from './';

export type RootStackParamList = {
  [ROUTE_NAME.Splash]: undefined;
  [ROUTE_NAME.Login]: undefined;
  [ROUTE_NAME.Register]: undefined;
  [ROUTE_NAME.ForgotPassword]: undefined;
  [ROUTE_NAME.Home]: undefined;
  [ROUTE_NAME.ComponentDemo]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeDefault = () => {
  return <View />;
};

export default function RootNavigationWrapper() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ROUTE_NAME.Splash}>
        <Stack.Screen
          name={ROUTE_NAME.Splash}
          component={GetStartView}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.ComponentDemo}
          component={DemoComponentScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.Login}
          component={LoginView}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.Register}
          component={RegisterView}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.ForgotPassword}
          component={ForgotPasswordView}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen name={ROUTE_NAME.Home} component={HomeDefault} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
