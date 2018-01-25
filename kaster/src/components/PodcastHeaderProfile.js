import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
	Dimensions,
	StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window')

export default class PodcastHeaderProfile extends Component {
  render() {
    return (
			<View>
			{/* <View style={styles.headerBackground}/> */}
				<View style={styles.profileContainer}>
					<Image source={{uri: this.props.artworkUrl}}
								style={styles.profileImage}/>
					
					<Text style={styles.nameText}>
						{this.props.name}
					</Text>
					<Text style={styles.ownerText}>{this.props.owner}</Text>
				</View>
			</View>
    )
  }
};

const styles = StyleSheet.create({
	headerBackground: {
		position: 'absolute',
		height: 115,
		width: width,
		backgroundColor: 'black',
	},
	profileContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		elevation: 2,
		paddingHorizontal: 5,
	},
	profileImage: {
		height: 150,
		width: 150,
		borderRadius: 100,
		marginVertical: 10,
	},
	nameText: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	ownerText: {
		textAlign: 'center',
	}
	
})