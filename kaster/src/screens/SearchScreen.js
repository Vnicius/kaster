import React, { Component } from 'react';
import { 
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Toolbar from '../components/Toolbar';
import ToolbarSearch from '../components/ToolbarSearch';
import SquarePodcastsContainer from '../components/SquarePodcastsContainer';
import PodcastDetailScreen from './PodcastDetailScreen';

const data = {
  podcasts: [
    {
      id: 1,
      name: "Nome1",
      description: "Esse é um podcast top!"
    },
    {
      id: 2,
      name: "Nome2"
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

export class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searching: false,
      text: "",
    }
  }

  static navigationOptions = {
    header: null
  }

  fillBody() {
    return ( this.state.searching ? 
             <View /> :
            <SquarePodcastsContainer podcasts={data.podcasts}
                                     onPress={this.handlerPress.bind(this)}/>);
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

  handlerPress(podcastData) {
    this.props.navigation.navigate('PodcastDetail', podcastData)
  }

  render() {
    const { navigate } = this.props.navigation;
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

const searchStack = StackNavigator({
    Home: {
      screen: SearchScreen,
    },
    PodcastDetail: {
      screen: PodcastDetailScreen,
    }
  });

export default searchStack;