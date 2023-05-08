import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {AuthorizeResult} from 'react-native-app-auth';

import {ROUTE_NAME} from '@app/navigators';
import {store} from '@app/utils/encrypted-storage';
import {AUTHORIZATION_INFO} from '@app/utils/keys';
import {useNavigation} from '@react-navigation/native';

import useAppleAuth from './useAppleAuth';
import useFacebookAuth from './useFacebookAuth';
import useGoogleAuth from './useGoogleAuth';

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

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  // accessToken: '',
  // accessTokenExpirationDate: '',
  // refreshToken: '',
};

const useAuthorization = () => {
  const [authState, setAuthState] = useState(defaultAuthState);
  const navigation = useNavigation();
  const {handleAuthorize: handleAuthorizeGoogle} = useGoogleAuth();
  const {handleAuthorize: handleAuthorizeFacebook} = useFacebookAuth();
  const {handleAuthorize: handleAuthorizeApple} = useAppleAuth();

  useEffect(() => {
    if (authState.hasLoggedInOnce) {
      store(AUTHORIZATION_INFO, authState);
      navigation.navigate(ROUTE_NAME.Home);
    }
  }, [authState]);

  const handleLoginGoogle = useCallback(async () => {
    console.log('useGoogleAuth - handleAuthorize');
    // Log in to get an authentication token
    try {
      const result: AuthorizeResult = await handleAuthorizeGoogle();
      setAuthState({
        hasLoggedInOnce: true,
        provider: 'google',
        ...result,
      });
    } catch (error) {
      throw `Auth google failed with error: ${error.message}`;
    }
  }, [authState]);

  const handleLoginFacebook = useCallback(async () => {
    console.log('handleLoginFacebook -');
    // Log in to get an authentication token
    try {
      const result = await handleAuthorizeFacebook();
      if (result?.accessToken) {
        setAuthState({
          hasLoggedInOnce: true,
          provider: 'facebook',
          ...result,
        });
      }
    } catch (error) {
      throw `Auth google failed with error: ${error.message}`;
    }
  }, [authState]);

  const handleLoginApple = useCallback(async () => {
    console.log('handleLoginApple -');
    // Log in to get an authentication token
    try {
      const result = await handleAuthorizeApple();
      // if (result?.accessToken) {
      //   setAuthState({
      //     hasLoggedInOnce: true,
      //     provider: 'facebook',
      //     ...result,
      //   });
      // }
    } catch (error) {
      throw `Auth apple failed with error: ${error.message}`;
    }
  }, [authState]);

  return {
    handleLoginGoogle,
    handleLoginFacebook,
    handleLoginApple,
  };
};

export default useAuthorization;
