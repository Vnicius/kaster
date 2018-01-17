import React, { Component } from 'react';
import {
	View,
	ScrollView,
} from 'react-native';

import SquarePodcast from './SquarePodcast';

export default class componentName extends Component {
	podcasts() {
    return this.props.podcasts.map((podcast) => {
      return <SquarePodcast key={podcast.id} />
    });
	}

  render() {
    return (
			<ScrollView>
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
