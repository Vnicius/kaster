import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class SquarePodcast extends Component {
  render() {
    return (
      <View style={styles.container}>
			</View>
    )
  }
};

var { width } = Dimensions.get('window')
const widthDim = Math.floor(width/3) - 2

const styles = StyleSheet.create({
  container: {
    width: widthDim,
    height: widthDim,
    backgroundColor: "gray",
    margin: 1,
  }
});
