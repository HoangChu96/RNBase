import {atom} from 'recoil';

import {
  Restaurant,
  UserDto,
} from '@app/services/graphql/graphql-sdk-generated';

export interface AuthType {
  restaurant?: Restaurant | undefined;
  user?: UserDto | undefined;
}

const authState = atom<AuthType>({
  key: 'authState',
  default: {
    restaurant: undefined,
    user: undefined,
  },
});

export default authState;
