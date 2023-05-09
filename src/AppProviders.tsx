import React from 'react';

import {RecoilRoot} from 'recoil';

import {QueryClientProvider} from '@tanstack/react-query';

import queryClient from './services/query-client';

const AppProviders: React.FC<any> = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{props.children}</RecoilRoot>
    </QueryClientProvider>
  );
};

export default AppProviders;
