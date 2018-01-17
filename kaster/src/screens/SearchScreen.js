import React, { Component } from 'react';
import { 
  Text,
  ScrollView,
  View,
  TextInput,
} from 'react-native';

import Toolbar from '../components/Toolbar';
import ToolbarSearch from '../components/ToolbarSearch';
import SquarePodcastsContainer from '../components/SquarePodcastsContainer';

const data = {
  podcasts: [
    {
      id: 1,
      name: "Nome"
    },
    {
      id: 2,
      name: "Nome"
    },
    {
      id: 3,
      name: "Nome"
    },
    {
      id: 4,
      name: "Nome"
    },
    {
      id: 5,
      name: "Nome"
    },
    {
      id: 6,
      name: "Nome"
    },
    {
      id: 7,
      name: "Nome"
    },
    {
      id: 8,
      name: "Nome"
    },
    {
      id: 9,
      name: "Nome"
    },
    {
      id: 10,
      name: "Nome"
    },
    {
      id: 11,
      name: "Nome"
    },
    {
      id: 12,
      name: "Nome"
    },
    {
      id: 13,
      name: "Nome"
    },
    {
      id: 14,
      name: "Nome"
    },
  ]
}

export default class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searching: false,
      text: "",
    }
  }

  fillBody() {
    return ( this.state.searching ? 
             <View /> :
            <SquarePodcastsContainer podcasts={data.podcasts}/>);
  }

  handlerChange(text) {
    if (text === "" ){
      this.setState({
        text: text,
        searching: false
      });
    } else {
      this.setState({
        text: text,
        searching: true
      });
    }
    
  }

  handlerSubmit() {
    console.log("Enviado")
  }

  render() {
    return (
      <View>
        <Toolbar content={<ToolbarSearch onChangeText={this.handlerChange.bind(this)}
                                         onSubmit={this.handlerSubmit.bind(this)}
                                         value={this.state.text}/>}/>
        {this.fillBody()}
      </View>
    )
  }
};
