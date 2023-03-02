import {
  Insets,
  StyleSheet,
} from 'react-native';

export const commonStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#2C3A571A',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },
});

export const hitSlop: Insets = {
  bottom: 10,
  left: 10,
  right: 10,
  top: 10,
};

export const hitSlopMedium: Insets = {
  bottom: 20,
  left: 20,
  right: 20,
  top: 20,
};
