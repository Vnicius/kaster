import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WaitLoading from '../components/WaitLoading';
import PodcastHeaderProfile from '../components/PodcastHeaderProfile';
import PodcastBodyProfile from '../components/PodcastBodyProfile';

import { 
  fetchPodcast,
  fetchFeed,
  fetchPodcastAndFeed,
} from '../actions/detailActions';

class PodcastDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    tabBarVisible: false,
  });

  errorsAlert() {
    if(this.props.fetchPodcastError) {
      alert("Error to get the podcast's data!");
    }
    
    if(this.props.fetchFeedError) {
      alert("Error to get the podcast's feed data!");
    }
  }

  render() {
    const { params } = this.props.navigation.state;

    if(!this.props.fetchingPodcast
       && !this.props.fetchedPodcast
       && !this.props.fetchPodcastError) {
      
      this.props.fetchPodcastAndFeed(params.id);
    }
    return (
      <ScrollView style={{elevation: 10, backgroundColor: '#f2f2f2'}}>
        {this.errorsAlert()}
        {
          this.props.currentPodcast 
          ? <PodcastHeaderProfile artworkUrl={this.props.currentPodcast.artworkUrl600}
                                  name={this.props.currentPodcast.collectionName}
                                  owner={this.props.currentPodcast.artistName}/>

          : <WaitLoading style={{marginTop: 60,}} />
        }
        {
          this.props.feed
          ? <PodcastBodyProfile {...this.props.feed} />
          : <WaitLoading style={{marginTop: 20,}} />
        }
        
      </ScrollView>
    )
  }
};

function mapStateToProps(state) {
  return {
    currentPodcast: state.detail.currentPodcast,
    fetchedPodcast: state.detail.fetchedPodcast,
    fetchingPodcast: state.detail.fetchingPodcast,
    fetchPodcastError: state.detail.fetchPodcastError,
    feed: state.detail.feed,
    fetchingFeed: state.detail.fetchingFeed,
    fetchedFeed: state.detail.fetchFeed,
    fetchFeedError: state.detail.fetchFeedError,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPodcast: fetchPodcast,
    fetchFeed: fetchFeed,
    fetchPodcastAndFeed: fetchPodcastAndFeed,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetailScreen);