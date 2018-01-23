import React, { Component } from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';

export default class PodcastDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    tabBarVisible: false,
  });

  render() {
		const { params } = this.props.navigation.state;
    return (
      <ScrollView style={{elevation: 10}}>
        <Text>{params.description}</Text>
      </ScrollView>
    )
  }
};
