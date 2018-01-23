import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Text
} from 'react-native';

import SquarePodcast from './SquarePodcast';

export default class componentName extends Component {
	podcasts() {
    return this.props.podcasts.map((podcast) => {
      return <SquarePodcast key={podcast.id}
														podcast={podcast}
														onPress={this.props.onPress}/>
    });
	}

	hasLabel() {
		if(this.props.label) {
			return <Text>{this.props.label}</Text>
		}
	}

  render() {
    return (
			<ScrollView>
				{this.hasLabel()}
				<View style={{
					flex: 1,
					flexDirection: 'row',
					flexWrap: 'wrap',
					paddingBottom: 60,
				}}>
					{this.podcasts()}
				</View>
      </ScrollView>
    )
  }
};
