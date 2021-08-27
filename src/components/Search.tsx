import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

type Props = {
  items: any;
  placeholderText: any;
  textChangeCallBack: any;
  itemSelectCallBack: any;
};

const Search = (props: Props) => {
  return (
    <SearchableDropdown
      onItemSelect={(item: any) => {
        props.itemSelectCallBack(item);
      }}
      onTextChange={(text: any) => {
        props.textChangeCallBack(text);
      }}
      containerStyle={styles.containerStyle}
      itemStyle={styles.itemStyle}
      itemTextStyle={styles.itemTextStyle}
      itemsContainerStyle={styles.itemsContainerStyle}
      items={props.items}
      resetValue={false}
      textInputProps={{
        placeholder: props.placeholderText,
        placeholderTextColor: '#a6a6a6',
        underlineColorAndroid: 'transparent',
        style: styles.textPropsStyle,
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
    />
  );
};

export const SearchBarComponent = memo(Search);

const styles = StyleSheet.create({
  containerStyle: {padding: 5},
  itemStyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderRadius: 5,
  },
  itemTextStyle: {color: 'black'},
  itemsContainerStyle: {maxHeight: 140},
  textPropsStyle: {
    padding: 12,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#a6a6a6',
  },
});
