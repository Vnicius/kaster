import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class SquarePodcast extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {
          this.props.onPress(this.props.podcast);
        }}>
        <View style={styles.container}>
        </View>
      </TouchableOpacity>
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
