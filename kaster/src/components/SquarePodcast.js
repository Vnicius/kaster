import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class SquarePodcast extends Component {
  
  render() {
    return (
      <TouchableOpacity onPress={() => {
          this.props.onPress(this.props.podcast);
        }}>
        <View style={[styles.dimensions, styles.container]}>
          <Image source={{uri: this.props.podcast.artworkUrl100}} 
                 style={styles.dimensions}/>
        </View>
      </TouchableOpacity>
    )
  }
};

var { width } = Dimensions.get('window')
const widthDim = Math.floor(width/3) - 2

const styles = StyleSheet.create({
  dimensions: {
    width: widthDim,
    height: widthDim,
  },
  container: {
    backgroundColor: "gray",
    margin: 1,
  }
});
