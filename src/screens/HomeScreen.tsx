import React, {memo, useRef} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';
import {PickerComponent, SearchBarComponent, TabComponent} from '../components';
import {SearchIcon, ClearIcon} from '../core/Icons';

const HomeScreen = () => {
  const items = [
    {
      id: 1,
      name: '₹399',
    },
    {
      id: 2,
      name: '₹16',
    },
    {
      id: 3,
      name: '₹98',
    },
    {
      id: 4,
      name: '₹250',
    },
  ];
  const pickerRef = useRef();
  return (
    <SafeAreaView style={[{flex: 1}]}>
      <View style={[{flex: 1}]}>
        <View
          style={[
            {
              flexDirection: 'row',
              height: 80,
              marginHorizontal: 20,
            },
          ]}>
          <View style={[{flex: 4, marginTop: 5}]}>
            <View style={[{flex: 1}]}>
              <Text
                style={[{color: '#ff6600', fontSize: 23, fontWeight: '600'}]}>
                Browse Plans
              </Text>
            </View>
            <View
              style={[
                {
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
              <View style={[{flex: 1}]}>
                <Text style={[{fontSize: 15}]}>for</Text>
              </View>
              <View style={[{flex: 8}]}>
                <PickerComponent reference={pickerRef} />
              </View>
            </View>
          </View>
          <View
            style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
            <TouchableOpacity
              onPress={() => {
                pickerRef.current.focus();
              }}>
              <ClearIcon color={'#000000'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: '#bfbfbf',
              marginHorizontal: 20,
            },
          ]}>
          <View style={[{flex: 7}]}>
            <SearchBarComponent
              items={items}
              placeholderText={'Search Plan Amount, Talktime'}
              textChangeCallBack={(text: any) => {}}
              itemSelectCallBack={(selectedItem: any) => {
                Alert.alert(`${selectedItem.name} pack selected!`);
              }}
            />
          </View>
          <View style={[{flex: 1}]}>
            <SearchIcon color={'#a6a6a6'} size={20} />
          </View>
        </View>
        <View style={[{flex: 1}]}>
          <TabComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
