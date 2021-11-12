/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Stack = createNativeStackNavigator();
import Detail from './src/Screens/Detail'
import Home from './src/Screens/Home';



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'reddit/r/programming ' }}
        />
        <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// {/* <SafeAreaView >
//   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
//   <Home />
// {/* </SafeAreaView> */}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
