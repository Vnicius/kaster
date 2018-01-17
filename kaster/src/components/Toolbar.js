import React, { Component } from 'react';
import { 
	ToolbarAndroid,
	StyleSheet,
} from 'react-native';

export default class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid
				style={styles.toolBar}
				titleColor="white"
				title={this.props.title}
    	/>
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