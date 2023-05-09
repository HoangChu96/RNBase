import {selector} from 'recoil';

import authState from './atom';

const withLoginUser = selector({
  key: 'withLoginUser',
  get: ({get}) => get(authState).user,
  set: ({set, get}, user) => {
    const auth = get(authState);
    set(authState, {
      ...auth,
      user,
    });
  },
});

export default withLoginUser;
