import React, { Component } from 'react';
import { 
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSignedPodcasts } from '../actions/podcastAction';
import SquarePodcastsContainer from '../components/SquarePodcastsContainer';

class PodcastsScreen extends Component {
  render() {
    if(!this.props.signedPodcasts) {
      this.props.getSignedPodcasts();
    }
    return (
      <View>
        {
          this.props.signedPodcasts
          ? <SquarePodcastsContainer podcasts={this.props.signedPodcasts}
                                     onPress={() => alert("Role")}/>
          : <Text>No Podcasts!</Text>
        }
      </View>
    )
  }
};

function mapStateToProps(state) {
  return {
    signedPodcasts: state.podcast.signedPodcasts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSignedPodcasts: getSignedPodcasts,
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastsScreen);
