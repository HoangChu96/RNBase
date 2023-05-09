import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Button from '@app/components/button';
import CheckBox from '@app/components/checkbox';
import Col from '@app/components/col';
import Divider from '@app/components/divider';
import IconButton from '@app/components/icon.button';
import Loading from '@app/components/loading';
import OutlineButton from '@app/components/outline.button';
import RadioButton from '@app/components/radio.button';
import Row from '@app/components/row';
import {
  MultipleSelectList,
  SelectList,
} from '@app/components/select';
import SolidButton from '@app/components/solid.button';
import Space from '@app/components/space';
import SwitchAnimation
  from '@app/components/switch/switch.animation.component';
import Text from '@app/components/text';
import TextInput from '@app/components/textinput';
import {colors} from '@app/theme';
import size from '@app/utils/fontsize';
import images from '@app/utils/images';

interface DemoComponentScreenProps {}

const data = [
  {key: '1', value: 'Mobiles', disabled: true},
  {key: '2', value: 'Appliances'},
  {key: '3', value: 'Cameras'},
  {key: '4', value: 'Computers', disabled: true},
  {key: '5', value: 'Vegetables'},
  {key: '6', value: 'Diary Products'},
  {key: '7', value: 'Drinks'},
];

const DemoComponentScreen = (props: DemoComponentScreenProps) => {
  const [selected, setSelected] = React.useState('');
  const [dropdownShown, setDropdownShown] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Demo component</Text>
      <ScrollView>
        <Row>
          <Text>Text: </Text>
          <Text style={styles.text}>Custom text</Text>
        </Row>
        <Space variant="vertical" />
        <Row>
          <Text>Text input: </Text>
          <TextInput
            trailingIcon={images.ic_default}
            leadingIcon={images.ic_default}
            tinColor={colors.text}
          />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Base Button: </Text>
          <Button label="Base button" />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Outline Button: </Text>
          <OutlineButton label="Outline button" />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Leading Outline Button: </Text>
          <OutlineButton
            label="Outline button"
            leadingIcon={images.ic_welcome}
            tinColor={colors.text}
          />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Trailing Outline Button: </Text>
          <OutlineButton
            label="Trailing button"
            trailingIcon={images.ic_welcome}
            tinColor={colors.text}
          />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Solid Button: </Text>
          <SolidButton label="Solid button" trailingIcon={images.ic_welcome} />
        </Row>

        <Space variant="vertical" />
        <Col>
          <Text>Icon Button (none, rounded, square): </Text>
          <Space variant="vertical" space={20} />
          <Row>
            <IconButton source={images.ic_fb} />
            <Space space={20} />
            <IconButton source={images.ic_fb} variant="rounded" />
            <Space space={20} />
            <IconButton source={images.ic_fb} variant="square" />
          </Row>
        </Col>

        <Space variant="vertical" />
        <Row>
          <Text>Check Box: </Text>
          <CheckBox label="Item 1" />
          <Space />
          <CheckBox label="Item 2" isSelected />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Radio Options: </Text>
          <RadioButton label="Item 1" isSelected />
          <Space />
          <RadioButton label="Item 2" />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Loading: </Text>
          <Loading size="small" />
          <Loading size="large" />
          <Loading size="large" color={colors.primary} />
        </Row>

        <Space variant="vertical" />
        <Row
          style={{
            width: '100%',
          }}>
          <Text>Horizontal Divider: </Text>
          <Divider />
          <Space />
          <Divider thickness={2} />
          <Space />
          <Divider thickness={3} />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Switch: </Text>
          <SwitchAnimation
            active
            // value={e.available}
            // onValueChange={value => onChangeValue(value, index, 'available')}
          />
        </Row>

        <Space variant="vertical" />
        <Row>
          <Text>Vertical Divider: </Text>

          <Divider orientation="vertical" />
          <Space />
          <Divider orientation="vertical" thickness={2} />
          <Space />
          <Divider orientation="vertical" thickness={3} />
          <Space />
          <Divider orientation="vertical" thickness={4} />
          <Space />
          <Divider orientation="vertical" thickness={5} />
        </Row>

        <Space variant="vertical" />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setDropdownShown(!dropdownShown);
          }}>
          <Row
            style={{
              alignItems: 'flex-start',
            }}>
            <Text>Select: </Text>
            <SelectList
              setSelected={(val: any) => setSelected(val)}
              data={data}
              save="value"
              dropdownShown={dropdownShown}
            />
            <Space />
            <MultipleSelectList
              setSelected={(val: any) => setSelected(val)}
              data={data}
              save="value"
              // onSelect={() => Alert.alert(selected)}
              label="Categories"
            />
          </Row>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DemoComponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  title: {
    fontSize: size.size_30,
    marginBottom: 24,
  },
  text: {
    color: colors.primary,
  },
});
