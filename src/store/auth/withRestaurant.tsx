import {selector} from 'recoil';

import authState from './atom';

const withRestaurant = selector({
    key: "withRestaurant",
    get: ({ get }) => get(authState).restaurant,
})

export default withRestaurant;
