import {useCallback} from 'react';

import {
  AuthConfiguration,
  authorize,
  AuthorizeResult,
} from 'react-native-app-auth';

const configs = {
  identityserver: {
    issuer: 'https://demo.duendesoftware.com',
    clientId: 'interactive.public',
    redirectUrl: 'io.identityserver.demo:/oauthredirect',
    additionalParameters: {},
    scopes: ['openid', 'profile', 'email', 'offline_access'],

    // serviceConfiguration: {
    //   authorizationEndpoint: 'https://demo.duendesoftware.com/connect/authorize',
    //   tokenEndpoint: 'https://demo.duendesoftware.com/connect/token',
    //   revocationEndpoint: 'https://demo.duendesoftware.com/connect/revoke'
    // }
  },
  auth0: {
    // From https://openidconnect.net/
    issuer: 'https://samples.auth0.com',
    clientId: 'kbyuFDidLLm280LIwVFiazOqjO3ty8KH',
    redirectUrl: 'https://openidconnect.net/callback',
    additionalParameters: {},
    scopes: ['openid', 'profile', 'email', 'phone', 'address'],

    // serviceConfiguration: {
    //   authorizationEndpoint: 'https://samples.auth0.com/authorize',
    //   tokenEndpoint: 'https://samples.auth0.com/oauth/token',
    //   revocationEndpoint: 'https://samples.auth0.com/oauth/revoke'
    // }
  },
  google: {
    issuer: 'https://accounts.google.com',
    clientId:
      '226984178449-t1im9n85g6rrgiorkii08aas841lt169.apps.googleusercontent.com',
    redirectUrl: 'com.rnbasetemplate:/oauth2callback/',
    scopes: ['openid', 'profile', 'email'],
  },
};

const useGoogleAuth = () => {
  const handleAuthorize = useCallback(async () => {
    console.log('useGoogleAuth - handleAuthorize');
    // Log in to get an authentication token
    try {
      const config: AuthConfiguration = configs.google;
      const result: AuthorizeResult = await authorize(config);
      return result;
    } catch (error) {
      throw `Auth google failed with error: ${error.message}`;
    }
  }, []);

  const handleRefreshedState = useCallback(async (provider: string) => {
    // Log in to get an authentication token
    try {
      // const config: AuthConfiguration = configs.google;
      // // Refresh token
      // const refreshedState: RefreshResult = await refresh(config, {
      //   refreshToken: authState.refreshToken,
      // });
      // setAuthState(current => ({
      //   ...current,
      //   ...refreshedState,
      //   refreshToken: refreshedState.refreshToken || current.refreshToken,
      // }));
      // return refreshedState;
    } catch (error) {
      throw `Auth google failed with error: ${error.message}`;
    }
  }, []);

  const handleRevoke = useCallback(async () => {
    try {
      // const config = configs.google;
      // await revoke(config, {
      //   tokenToRevoke: authState.accessToken,
      //   sendClientId: true,
      // });
      // setAuthState(defaultAuthState);
    } catch (error) {
      throw `Failed to revoke token: ${error.message}`;
    }
  }, []);

  return {
    handleAuthorize,
    handleRefreshedState,
    handleRevoke,
  };
};

export default useGoogleAuth;
