import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';

export default class WaitLoading extends Component {
  render() {
    return (
        <View style={[{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        },this.props.style]}>
          <ActivityIndicator size="large" color="#512da8" />
        </View>
    )
  }
};
