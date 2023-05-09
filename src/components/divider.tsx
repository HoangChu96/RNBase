import {
  StyleSheet,
  View,
} from 'react-native';

import {colors} from '@app/theme';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
}

const Divider = (props: DividerProps) => {
  const {
    orientation = 'horizontal',
    thickness = 1,
    color = colors.border,
  } = props;
  return (
    <View
      style={[
        {
          width: thickness,
          height: thickness,
          backgroundColor: color,
        },
        styles[orientation],
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  horizontal: {
    // width: '100%',
    flex: 1,
  },
  vertical: {
    height: '100%',
  },
});
