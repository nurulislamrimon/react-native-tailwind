import {View, Text, useColorScheme, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[styles.container, isDarkMode ? styles.bgBlack : styles.bgWhite]}>
      <Text
        style={[
          styles.textCenter,
          !isDarkMode ? styles.textBlack : styles.textWhite,
        ]}>
        App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  bgWhite: {backgroundColor: 'white'},
  bgBlack: {backgroundColor: 'black'},
  textWhite: {color: 'white'},
  textBlack: {color: 'black'},
});
