import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

import HTML from 'react-native-render-html';

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
					{<Text style={styles.text}>{this.props.item[0].pubDate[0]
											 .replace(new RegExp(" [\+-][0-9]{4}"),"")}
					</Text>}
					{this.props.item[0].image
						? <Image source={{uri: this.props.item[0].image[0].$.href}} 
								 style={{
									 height: 150,
									 width: 150,
									 borderRadius: 20,
								 }}/>
						: <Image source={{uri: this.props.image[0].$.href}} 
								 style={{
									 height: 150,
									 width: 150,
									 borderRadius: 20,
								 }}/>
					}

					<Text style={[styles.title, {textAlign: 'center'}]}>
						{this.props.item[0].title[0]}
					</Text>

					{	this.props.item[0].description
						? <HTML html={this.props.item[0].description[0]
													.replace(new RegExp('\r\n|\n|\r', 'g'),'</br>')}/>
						: <HTML html={this.props.item[0].subtitle[0]
													.replace(new RegExp('\r\n|\n|\r', 'g'),'</br>')}/>
					}
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
		marginBottom: 10,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 15,
	},
	text: {
		fontSize: 15,
		marginVertical: 8,
	},
	episode: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 10,
	}
});