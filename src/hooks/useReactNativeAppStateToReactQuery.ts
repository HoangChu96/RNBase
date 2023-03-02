import {
  AppStateStatus,
  Platform,
} from 'react-native';
import useAppState from 'react-native-appstate-hook';

import {focusManager} from '@tanstack/react-query';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export const useReactNativeAppStateToReactQuery = () => {
  useAppState({
    onChange: onAppStateChange,
  });
};
