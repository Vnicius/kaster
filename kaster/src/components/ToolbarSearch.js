import React, { Component } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class ToolbarSearch extends Component {
  constructor() {
		super();
		this.state ={
			text: ""
    }
    console.log(this.state)
	}

	press() {
		console.log("Press");
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome style={styles.icon}>
          {Icons.search}
        </FontAwesome>
        <TextInput
            style={styles.input}
            underlineColorAndroid={"#adadeb"}
            selectionColor={"white"}
            placeholderTextColor={"#adadeb"}
            onChangeText={(text) => this.setState({text})}
            placeholder={"Search..."}
            value={this.state.text}/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  icon: {
    color: "white",
    fontSize: 20,
  },
  input: {
    width: 300,
    color: "white",
    marginLeft: 15,
    fontSize: 15,
  }
})