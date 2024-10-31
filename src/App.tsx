import '../global.css';
import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import NestedStyle from './components/NestedStyle';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      className={`${
        isDarkMode ? 'bg-black' : 'bg-white'
      } flex-1 justify-center`}>
      <Text
        className={`${
          !isDarkMode ? 'color-black' : 'color-white'
        } text-center`}>
        App
      </Text>
      <NestedStyle />
    </View>
  );
}
