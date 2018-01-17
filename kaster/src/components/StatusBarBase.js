import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class StatusBarBase extends Component {
  render() {
    return (
        <StatusBar
            backgroundColor="#140078"
            barStyle="light-content"
          />
    )
  }
};
