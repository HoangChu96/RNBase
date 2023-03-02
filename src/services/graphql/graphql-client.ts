import {GraphQLClient} from 'graphql-request';

import env from '../../utils/env';

const endpoint = env.BASE_URL;

let authToken: string;

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const getAuthToken = () => authToken;

export const getClient = (auth = true, abortController: any) => {
  const graphQLClient = new GraphQLClient(endpoint, {
    signal: abortController?.signal,
  });

  if (auth) {
    graphQLClient.setHeader('authorization', auth ? `Bearer ${authToken}` : '');
  }

  return graphQLClient;
};

export default {
  getClient,
};
