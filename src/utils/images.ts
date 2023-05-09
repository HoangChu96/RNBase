/* eslint-disable no-restricted-syntax */
import {Platform} from 'react-native';

const images = {
  background: require('../assets/images/background.png'),
  ic_welcome: require('../assets/images/ic_welcome.png'),
  ic_fb: require('../assets/images/ic_fb.png'),
  ic_google: require('../assets/images/ic_google.png'),
  ic_apple: require('../assets/images/ic_apple.png'),
  ic_default: require('../assets/images/ic_no_image.png'),
  ic_box_checked: require('../assets/images/ic_box_checked.png'),
  ic_box_list_check: require('../assets/images/ic_box_list_check.png'),
  ic_box_un_check: require('../assets/images/ic_box_un_check.png'),
  ic_eye_notshow: require('../assets/images/ic_eye_notshow.png'),
  ic_eye_show: require('../assets/images/ic_eye_show.png'),
  ic_no_avatar: require('../assets/images/ic_no_avatar.png'),
  ic_no_image: require('../assets/images/ic_no_image.png'),
  ic_search: require('../assets/images/ic_search.png'),
};

if (Platform.OS === 'web') {
  for (const key in images) {
    if (Object.prototype.hasOwnProperty.call(images, key)) {
      const value = images[key];
      images[key] = value.default;
    }
  }
}

export default images;
