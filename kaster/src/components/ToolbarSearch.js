import React, { Component } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class ToolbarSearch extends Component {

  constructor(props) {
    super(props);
  }

  change(text) {
    this.props.onChangeText(text)
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
            onChangeText={(text) => {
              this.props.onChangeText(text);
            }}
            onSubmitEditing={() => {
              this.props.onSubmit();
            }}
            placeholder={"Search..."}
            value={this.props.value}/>
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