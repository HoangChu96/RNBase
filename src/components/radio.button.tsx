import * as React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

import {colors} from '@app/theme';

import Row from './row';
import Space from './space';
import Text from './text';

interface RadioButtonProps extends ViewProps {
  label?: string;
  isSelected?: boolean;
  color?: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const {
    label = '',
    isSelected = false,
    color = colors.primary,
    ...otherProps
  } = props;
  const colorStyle = isSelected ? color : colors.border;

  return (
    <Row>
      <TouchableOpacity
        style={[
          styles.radio,
          {
            borderColor: colorStyle,
          },
        ]}>
        {isSelected && (
          <View
            style={[
              styles.selectedDot,
              {
                backgroundColor: colorStyle,
              },
            ]}
          />
        )}
      </TouchableOpacity>
      <Space />
      <Text>{label}</Text>
    </Row>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  selectedDot: {
    width: 14,
    height: 14,
    borderRadius: 12,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
