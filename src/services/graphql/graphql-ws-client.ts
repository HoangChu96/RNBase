import {SubscriptionClient} from 'graphql-subscriptions-client';

import env from '@app/utils/env';

import {getAuthToken} from './graphql-client';

const GRAPHQL_ENDPOINT = env.WS_URL;

// set up the client, which can be reused
const wsClient = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  connectionParams: () => {
    // console.log('=== connectionParams ===');
    return {
      authorization: `Bearer ${getAuthToken()}`,
    };
  },
  lazy: true, // only connect when there is a query
  connectionCallback: error => {
    error && console.error(error);
  },
});

// wsClient.onConnected(() => {
//   console.log('onConnected');
// });

// wsClient.onConnecting(() => {
//   console.log('onConnecting');
// });

// wsClient.onDisconnected(() => {
//   console.log('onDisconnected');
// });

// wsClient.onError(() => {
//   console.log('onError');
// });

// wsClient.onReconnected(() => {
//   console.log('onReconnected');
// });

// wsClient.onReconnecting(() => {
//   console.log('onReconnecting');
// });

export default wsClient;
