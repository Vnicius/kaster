import React, { Component } from 'react';
import { 
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Toolbar from '../components/Toolbar';
import ToolbarSearch from '../components/ToolbarSearch';
import SquarePodcastsContainer from '../components/SquarePodcastsContainer';
import WaitLoadong from '../components/WaitLoading';
import { fetchTop } from '../actions/searchActions';
import { reset } from '../actions/detailActions';

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
                                     onPress={this.handlerSelectPodcast.bind(this)}/>);
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

  handlerSelectPodcast(podcastData) {
    this.props.reset();
    this.props.navigation.navigate('PodcastDetail', podcastData);
  }

  showWaitLoader() {
    if(this.props.topFetching) {
      return (
        <WaitLoadong style={{top: 60,}}/>
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    if (!this.props.topFetching 
        && !this.props.topFetched
        && !this.props.topError) {
      
      this.props.fetchTop('br');
    }

    return (
      <View>
        <Toolbar content={<ToolbarSearch onChangeText={this.handlerChange.bind(this)}
                                         onSubmit={this.handlerSubmit.bind(this)}
                                         value={this.state.text}/>}/>
        {this.showWaitLoader()}
        {this.fillBody()}
      </View>
    )
  }
};

function mapStatetoProps(state) {
  return {
    top: state.search.top,
    topFetching: state.search.topFetching,
    topFetched: state.search.topFetched,
    topError: state.search.topError,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    fetchTop: fetchTop,
    reset: reset,
  }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchScreen);