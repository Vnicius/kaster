import React, { Component } from 'react';
import { 
  Text,
  View,
  TextInput,

} from 'react-native';

import Toolbar from '../components/Toolbar';
import ToolbarSearch from '../components/ToolbarSearch';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View>
        <Toolbar content={<ToolbarSearch />}/>
        <Text>SearchScreen</Text>
      </View>
    )
  }
};
