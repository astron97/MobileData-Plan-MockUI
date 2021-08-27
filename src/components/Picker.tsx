import React, {memo, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const PickerDDComponent = (props: {reference: any}) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Picker
      ref={props.reference}
      mode={'dropdown'}
      selectedValue={selectedOption}
      dropdownIconColor={'#ffffff'}
      onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}>
      <Picker.Item label="Airtel Kolkatta" value="java" />
      <Picker.Item label="Vodafone Kolkatta" value="js" />
    </Picker>
  );
};

export const PickerComponent = memo(PickerDDComponent);
