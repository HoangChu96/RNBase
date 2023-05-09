import * as React from 'react';

import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastConfig,
} from 'react-native-toast-message';

import {colors} from '@app/theme';

const toastConfig: ToastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: props => (
    <BaseToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 10,
        height: 50,
        flex: 0,
        width: undefined,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: colors.success,
        borderRadius: 10,
        flex: 0,
      }}
      text1Style={{
        fontSize: 16,
        color: colors.white,
        width: 'auto',
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: props => (
    <ErrorToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 10,
        height: 50,
        flex: 0,
        width: undefined,
        zIndex: 999,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: colors.error,
        borderRadius: 10,
        flex: 0,
      }}
      text1Style={{
        fontSize: 16,
        color: colors.white,
        width: 'auto',
      }}
    />
  ),
  info: props => (
    <InfoToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 10,
        height: 50,
        flex: 0,
        width: undefined,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: colors.warning,
        borderRadius: 10,
        flex: 0,
      }}
      text1Style={{
        fontSize: 16,
        color: colors.white,
        width: 'auto',
      }}
    />
  ),
};

const CustomToast = () => {
  return <Toast config={toastConfig} />;
};

export default CustomToast;
