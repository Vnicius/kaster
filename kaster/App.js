import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MainScreen from './src/screens/MainScreen';
import StatusBarBase from './src/components/StatusBarBase';
import Toolbar from './src/components/Toolbar';

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <StatusBarBase />
          <MainScreen />
        </View>
    );
  }
}