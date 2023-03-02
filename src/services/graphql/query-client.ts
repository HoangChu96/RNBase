import createUploadLink from 'apollo-upload-client/public/createUploadLink.js';

import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink(),
});
