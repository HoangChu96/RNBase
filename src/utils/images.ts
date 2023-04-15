/* eslint-disable no-restricted-syntax */
import {Platform} from 'react-native';

const images = {
  background: require('../assets/images/background.png'),
  ic_welcome: require('../assets/images/ic_welcome.png'),
  ic_fb: require('../assets/images/ic_fb.png'),
  ic_google: require('../assets/images/ic_google.png'),
  ic_apple: require('../assets/images/ic_apple.png'),
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
