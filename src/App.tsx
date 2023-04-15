import React from 'react';

import {StatusBar} from 'react-native';

import AppContainer from './AppContainer';
import AppProviders from './AppProviders';
import AppRootHookWrapper from './AppRootHookWrapper';
import RootNavigationWrapper from './navigators/RootNavigationWrapper';

StatusBar.setHidden(true);

const App = () => {
  return (
    <AppContainer>
      <AppProviders>
        <AppRootHookWrapper />
        <RootNavigationWrapper />
      </AppProviders>
    </AppContainer>
  );
};

export default App;
