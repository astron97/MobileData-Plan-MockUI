import React, {memo, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';

const Tab = () => {
  const [listRerender, setListRerender] = useState(false);
  const [tabItems, setTabItems] = useState([
    {key: 1, label: 'Best Offers for You', isHighlighted: true},
    {key: 2, label: 'Popular', isHighlighted: false},
    {key: 3, label: 'Special Recharge', isHighlighted: false},
    {key: 4, label: 'Top Up', isHighlighted: false},
  ]);

  const bestOffer = [
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 399,
      validity: '365 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
  ];

  const popularOffer = [
    {
      amount: 250,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 250,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 250,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 250,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
  ];

  const specialOffer = [
    {
      amount: 98,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 98,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
  ];

  const topupOffer = [
    {
      amount: 16,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
    {
      amount: 16,
      validity: '84 Days',
      description:
        'Enjoy truly unlimited Local, STD and Roaming calls on any network. 1 GB data per day, 100 National SMS/day for 28 days',
      isSelected: false,
    },
  ];

  const [offerItems, setOfferItems] = useState(bestOffer);

  const renderTabItems = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          let temp = tabItems;
          temp.map(x => {
            x.key === item.key
              ? x.isHighlighted
                ? (x.isHighlighted = false)
                : (x.isHighlighted = true)
              : (x.isHighlighted = false);
          });
          setTabItems(temp);
          item.key === 1
            ? setOfferItems(bestOffer)
            : item.key === 2
            ? setOfferItems(popularOffer)
            : item.key === 3
            ? setOfferItems(specialOffer)
            : item.key === 4
            ? setOfferItems(topupOffer)
            : null;
          listRerender ? setListRerender(false) : setListRerender(true);
        }}
        style={[
          {
            flex: 1,
            marginHorizontal: 20,
            justifyContent: 'center',
            borderBottomColor: item.isHighlighted ? '#ff6600' : 'transparent',
            borderBottomWidth: item.isHighlighted ? 2 : 0,
          },
        ]}>
        <Text style={[{fontSize: 13}]}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderOfferItems = ({item}) => {
    return (
      <View
        style={[
          {
            height: 140,
            borderBottomColor: '#a6a6a6',
            borderBottomWidth: 1,
            justifyContent: 'center',
            marginHorizontal: 20,
          },
        ]}>
        <View
          style={[
            {
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            },
          ]}>
          <View
            style={[
              {
                alignItems: 'flex-start',
                width: '50%',
              },
            ]}>
            <Text
              style={[
                {fontSize: 20, fontWeight: '500'},
              ]}>{`₹${item.amount}`}</Text>
          </View>
          <View
            style={[
              {
                alignItems: 'flex-end',
                width: '50%',
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(`₹${item.amount} pack selected!`);
              }}
              style={[
                {
                  backgroundColor: 'white',
                  width: 70,
                  height: 25,
                  borderRadius: 10,
                  borderColor: '#ff6600',
                  borderWidth: 1,
                },
              ]}>
              <Text
                style={[
                  {
                    color: '#ff6600',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  },
                ]}>
                Select
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[{flex: 1}]}>
          <Text style={[{fontWeight: '400'}]}>Validity: {item.validity}</Text>
        </View>
        <View style={[{flex: 2}]}>
          <Text style={[{color: '#666666'}]}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={[{width: 20}]} />;
  };

  return (
    <View style={[{flex: 1}]}>
      <View
        style={[
          {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#a6a6a6'},
        ]}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={tabItems}
          renderItem={renderTabItems}
        />
      </View>
      <View style={[{flex: 1}]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offerItems}
          renderItem={renderOfferItems}
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
    </View>
  );
};

export const TabComponent = memo(Tab);
