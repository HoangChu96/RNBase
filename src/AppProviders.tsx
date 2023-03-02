import React from 'react';

import {QueryClientProvider} from '@tanstack/react-query';

import queryClient from './services/query-client';

const AppProviders: React.FC<any> = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default AppProviders;
