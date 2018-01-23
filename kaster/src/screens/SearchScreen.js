import React, { Component } from 'react';
import { 
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Toolbar from '../components/Toolbar';
import ToolbarSearch from '../components/ToolbarSearch';
import SquarePodcastsContainer from '../components/SquarePodcastsContainer';
import { fetchTop } from '../actions/searchActions';

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
    return ( this.state.searching || !this.props.topFetched ? 
             <View /> :
            <SquarePodcastsContainer podcasts={this.props.top.feed.results}
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
    if (!this.props.topFetched && !this.props.topError) {
      this.props.fetchTop('br');
    }

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

function mapStatetoProps(state) {
  return {
    top: state.search.top,
    topFetched: state.search.topFetched,
    topError: state.search.topError,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    fetchTop: fetchTop,
  }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchScreen);