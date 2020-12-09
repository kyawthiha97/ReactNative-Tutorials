/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Product from './components/Product2';

const width = Dimensions.get('screen').width;

const products = [
  {
    id: 1,
    name: 'Wood Lamp',
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz14PBfiEJcDUTCkgv754F_xqlMOlqbMc7Mw&usqp=CAU',
    price: 25,
    categoryName: 'Funiture',
  },
  {
    id: 2,
    name: 'Modern Lamp',
    coverImageUrl: 'https://cb2.scene7.com/is/image/CB2/AdaIIWhiteTableLampSHF16',
    price: 39,
    categoryName: 'Funiture',
  },
  {
    id: 3,
    name: 'Modern Lamp',
    coverImageUrl: 'https://cb2.scene7.com/is/image/CB2/AdaIIWhiteTableLampSHF16',
    price: 39,
    categoryName: 'Funiture',
  },
];

export default function ProductsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        padding: 8,
      }}>
      <FlatList
        data={products}
        keyExtractor={(item) => {
          return 'product-' + item.id;
        }}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ width: width / 2 - 8 }}
              onPress={() => {
                navigation.navigate('ProductDetail', { item: item });
              }}>
              <Product data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
