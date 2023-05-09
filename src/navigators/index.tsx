import * as React from 'react';

import {
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/core';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function replaceScreen(name: ROUTE_NAME, params?: object): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function navigateToPage(name: ROUTE_NAME, params?: object): void {
  navigationRef.current?.navigate(name, params);
}

export function pushToPage(name: ROUTE_NAME, params?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function goBack(): void {
  navigationRef.current?.goBack();
}

export function resetStack(name: ROUTE_NAME, params?: object): void {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name, params}],
  });
}

export function popToTop(): void {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export enum ROUTE_NAME {
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  Splash = 'Splash',
  Home = 'Home',
  ComponentDemo = 'ComponentDemo',
}
