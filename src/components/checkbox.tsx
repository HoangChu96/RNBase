import * as React from 'react';

import {ViewProps} from 'react-native';

import {colors} from '@app/theme';
import images from '@app/utils/images';

import IconButton from './icon.button';
import Row from './row';
import Space from './space';
import Text from './text';

interface CheckBoxProps extends ViewProps {
  label?: string;
  isSelected?: boolean;
}

const CheckBox = (props: CheckBoxProps) => {
  const {label = '', isSelected = false, ...otherProps} = props;
  const icon = isSelected ? images.ic_box_checked : images.ic_box_un_check;
  const tinColor = isSelected ? undefined : colors.border;

  return (
    <Row>
      <IconButton source={icon} tintColor={tinColor} />
      <Space />
      <Text>{label}</Text>
    </Row>
  );
};

export default CheckBox;
