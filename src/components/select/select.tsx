import {useState} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

import {colors} from '@app/theme';

import Text from '../text';

interface SelectProps extends ViewProps {}

const Select = (props: SelectProps) => {
  const [visible, setVisible] = useState(false);

  const onChange = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onChange}
        style={{
          borderColor: colors.border,
          borderWidth: 1,
          padding: 12,
          position: 'relative',
        }}>
        <View>
          <Text>Select item</Text>
        </View>
      </TouchableOpacity>
      {visible && (
        <View
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            backgroundColor: 'white',
          }}>
          <Text>item 1</Text>
          <Text>item 2</Text>
        </View>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
