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
import { fetchTop, searchPodcast, resetSearch } from '../actions/searchActions';
import { reset } from '../actions/detailActions';

export class SearchScreen extends Component {
  constructor(){
    super();
    this.state = {
      text: "",
    }
  }

  static navigationOptions = {
    header: null
  }

  handlerChange(term) {
    this.setState({
      text: term,
    });

    if (term === "" ){
      this.props.resetSearch();
      return;
    }

    this.props.searchPodcast(term);
  }

  handlerSubmit() {
    if(this.state.text !== ""
       && !this.props.podcasts) {
      this.props.searchPodcast(this.state.text);
    } else if (this.state.text === "") {
      this.props.resetSearch();
    }
  }

  handlerSelectPodcast(podcastData) {
    var podcast = {};
    podcast.id = podcastData.id ? podcastData.id : podcastData.trackId;
    podcast.name = podcastData.name ? podcastData.name : podcastData.collectionName;

    this.props.reset();
    this.props.navigation.navigate('PodcastDetail', podcast);
  }

  fillBody() {
    if(this.props.searchedPodcast
       && !this.props.searchingPodcast
       && this.state.text !== "") {
      return <SquarePodcastsContainer podcasts={this.props.podcasts}
                                      onPress={this.handlerSelectPodcast.bind(this)}/>
    } else if(this.props.topFetched
              && !this.props.searchingPodcast) {
      return <SquarePodcastsContainer podcasts={this.props.top.feed.results}
                                      onPress={this.handlerSelectPodcast.bind(this)}/>
    }
  }

  showWaitLoader() {
    if(this.props.topFetching || this.props.searchingPodcast) {
      return (
        <WaitLoadong style={{top: 60,}}/>
      );
    }
  }

  errorsAlert() {
    if(this.props.topError) {
      alert("Error to get the top podcast of the country!")
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    if (!this.props.topFetching 
        && !this.props.topFetched
        && !this.props.topError) {
      
      
      this.props.fetchTop();
    }

    return (
      <View>
        <Toolbar content={<ToolbarSearch onChangeText={this.handlerChange.bind(this)}
                                         onSubmit={this.handlerSubmit.bind(this)}
                                         value={this.state.text}/>}/>
        {this.errorsAlert()}
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
    podcasts: state.search.podcasts,
    searchingPodcast: state.search.searchingPodcast,
    searchedPodcast: state.search.searchedPodcast,
    searchPodcastError: state.search.searchPodcastError,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    fetchTop: fetchTop,
    searchPodcast: searchPodcast,
    resetSearch: resetSearch,
    reset: reset,
  }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchScreen);