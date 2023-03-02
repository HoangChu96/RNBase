import React from 'react';

import AppContainer from './AppContainer';
import AppProviders from './AppProviders';
import AppRootHookWrapper from './AppRootHookWrapper';
import RootNavigationWrapper from './navigators/RootNavigationWrapper';

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
