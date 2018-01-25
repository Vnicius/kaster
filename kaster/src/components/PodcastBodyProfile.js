import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

import WaitLoading from './WaitLoading';

export default class PodcastBodyProfile extends Component {
  render() {
    return (

			<View style={styles.container}>
				<Text style={styles.title}>
					Description
				</Text>
				<Text style={styles.text}>
					{this.props.description}
				</Text>
				<Text style={styles.title}>
					Latest Episode
				</Text>
				<View style={styles.episode}>
					{this.props.item[0].image
						? <Image source={{uri: this.props.item[0].image[0].$.href}} 
								 style={{
									 height: 150,
									 width: 150,
									 borderRadius: 20,
								 }}/>
						: <View/>
					}
					<Text style={[styles.title, {textAlign: 'center'}]}>{this.props.item[0].title}</Text>
					<Text style={styles.text}>{this.props.item[0].description}</Text>
				</View>
			</View>
    )
  }
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 15,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 10,
	},
	text: {
		fontSize: 15,
	},
	episode: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 10,
	}
});