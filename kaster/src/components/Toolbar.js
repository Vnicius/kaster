import React, { Component } from 'react';
import { 
	ToolbarAndroid,
	StyleSheet,
	View,
} from 'react-native';

export default class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid
				title={this.props.title ? this.props.title : ""}
				style={styles.toolBar}
				titleColor="white"
    	>
				<View style={{
					height: 56,
					backgroundColor: "#512da8",
				}}>
				{this.props.content}
				</View>
			</ToolbarAndroid>
    )
  }
};

const styles = StyleSheet.create({
	toolBar:{
		height: 56,
		backgroundColor: "#512da8",
		elevation: 4,
	}
});