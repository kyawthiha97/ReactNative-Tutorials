/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

const Menu2Screen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Menu 2</Text>
    </View>
  );
};

export default Menu2Screen;
