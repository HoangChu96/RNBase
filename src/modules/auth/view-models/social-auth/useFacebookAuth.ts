import {useCallback} from 'react';

import {
  AccessToken,
  LoginManager,
} from 'react-native-fbsdk-next';

const useFacebookAuth = () => {
  const handleAuthorize = useCallback(async () => {
    console.log('useFacebookAuth - handleAuthorize');
    // Log in to get an authentication token
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      console.log('=== result ===', JSON.stringify(result, null, 2));
      if (result.isCancelled) {
        console.log('Login cancelled');
        throw Error('Login cancelled');
      } else {
        const accessToken: AccessToken | null =
          await AccessToken.getCurrentAccessToken();
        return accessToken;
      }
      // if (result) {
      //   console.log('=== result ===', JSON.stringify(result, null, 2));
      //   return result;
      // }
    } catch (error) {
      throw `Auth google failed with error: ${error.message}`;
    }
  }, []);

  return {
    handleAuthorize,
  };
};

export default useFacebookAuth;
