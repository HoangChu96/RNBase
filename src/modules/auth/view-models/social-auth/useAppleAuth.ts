import {
  useCallback,
  useEffect,
} from 'react';

import {appleAuth} from '@invertase/react-native-apple-authentication';

const useAppleAuth = () => {
  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    return appleAuth.onCredentialRevoked(async () => {
      console.warn(
        'If this function executes, User Credentials have been Revoked',
      );
    });
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  const handleAuthorize = useCallback(async () => {
    console.log('Beginning Apple Authentication');
    // Log in to get an authentication token

    // start a login request
    try {
      if (!appleAuth.isSupported) return;
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log('appleAuthRequestResponse', appleAuthRequestResponse);

      const {user, email, nonce, identityToken, realUserStatus /* etc */} =
        appleAuthRequestResponse;

      if (user === null) {
        console.log('N/A');
        throw Error('Apple N/A');
      } else {
        const credentialState = await appleAuth.getCredentialStateForUser(user);
        if (credentialState === appleAuth.State.AUTHORIZED) {
          console.log('Apple AUTHORIZED');
          return appleAuthRequestResponse;
        } else {
          console.log('Apple:', JSON.stringify(credentialState, null, 2));
          // throw Error(`Apple: ${JSON.stringify(credentialState, null, 2)}`);
        }
      }

      if (identityToken) {
        // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
        console.log(nonce, identityToken);
      } else {
        // no token - failed sign-in?
      }

      if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
        console.log("I'm a real person!");
      }

      console.warn(`Apple Authentication Completed, ${user}, ${email}`);
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        console.warn('User canceled Apple Sign in.');
      } else {
        console.error(error);
      }
      throw Error(`Apple: ${error.message}`);
    }
  }, []);

  return {
    handleAuthorize,
  };
};

export default useAppleAuth;
