import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'

const App = StackNavigator({
  Home: {
    screen: MemoListScreen,
  },
  MemoDetailScreen: {
    screen: MemoDetailScreen,
  },
  MemoEditScreen: {
    screen: MemoEditScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  SignupScreen: {
    screen: SignupScreen,
  },
},{
  navigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
