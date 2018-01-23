import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Provider } from 'react-redux';

import MainScreen from './src/screens/MainScreen';
import StatusBarBase from './src/components/StatusBarBase';
import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <View style={{flex: 1}}>
            <StatusBarBase />
            <MainScreen />
          </View>
        </Provider>
    );
  }
}