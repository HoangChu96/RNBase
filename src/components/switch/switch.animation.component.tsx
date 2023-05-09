import React from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

import {colors} from '@app/theme';

import AnimatedSwitch, {AnimatedSwitchProps} from './animated.switch';

const {height, width} = Dimensions.get('window');

interface PropsSwitch extends AnimatedSwitchProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}
const SwitchAnimation = (props: PropsSwitch) => {
  const {value, onValueChange} = props;
  return (
    <View style={styles.container}>
      <AnimatedSwitch
        {...props}
        activeColor={colors.palette.primary500}
        active={value ?? false}
        onChangedValue={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default SwitchAnimation;
