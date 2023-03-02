import React from 'react';

import {
  useReactNativeAppStateToReactQuery,
} from './hooks/useReactNativeAppStateToReactQuery';

/**
 * Root hooks for global hook under providers
 * if you have any hook listen global, place it here
 * @returns
 */
export default function AppRootHookWrapper() {
  useReactNativeAppStateToReactQuery();

  return <></>;
}
