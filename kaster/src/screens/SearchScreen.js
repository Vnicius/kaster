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
import { fetchTop, fetchPodcast } from '../actions/searchActions';

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
    this.props.fetchPodcast(podcastData.id);
    
    if(this.props.fetchPodcastError){
      alert(this.props.fetchPodcastError);
    }else {
      this.props.navigation.navigate('PodcastDetail', this.props.podcast)
    }
  }

  showWaitLoader() {
    if(this.props.topFetching) {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 60,
        }}>
          <ActivityIndicator size="large" color="#512da8" />
        </View>
      );
    }
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
    podcast: state.search.podcast,
    fetchedPodcast: state.search.fetchedPodcast,
    fetchingPodcast: state.search.fetchingPodcast,
    fetchPodcastError: state.search.fetchPodcastError,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    fetchTop: fetchTop,
    fetchPodcast: fetchPodcast,
  }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchScreen);