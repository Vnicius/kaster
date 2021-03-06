import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WaitLoading from '../components/WaitLoading';
import PodcastHeaderProfile from '../components/PodcastHeaderProfile';
import PodcastBodyProfile from '../components/PodcastBodyProfile';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { 
  fetchPodcast,
  fetchFeed,
  fetchPodcastAndFeed,
  signPodcast,
  unsignPodcast,
} from '../actions/detailActions';

class PodcastDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
      height: 0,
    }
  }

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

  getHeight(event) {
    this.setState({height: event.nativeEvent.layout.height});
  }

  signPodcast() {
    this.props.signPodcast(this.props.currentPodcast.collectionId);
  }

  unsignPodcast() {
    this.props.unsignPodcast(this.props.currentPodcast.collectionId);
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
        <View onLayout={this.getHeight.bind(this)}>
        {
          this.props.currentPodcast 
          ? <PodcastHeaderProfile artworkUrl={this.props.currentPodcast.artworkUrl600}
                                  name={this.props.currentPodcast.collectionName}
                                  owner={this.props.currentPodcast.artistName}
                                  onLayout={this.layout}/>
          : <WaitLoading style={{marginTop: 60,}} />
        }
        </View>
        { 
          this.props.currentPodcast

          && 
          (<TouchableOpacity 
                onPress={ 
                          this.props.currentPodcast.signed
                          ? this.unsignPodcast.bind(this)
                          : this.signPodcast.bind(this)
                        }
                style={{position: 'absolute',
                        right: 10,
                        top: Math.floor(this.state.height - 30)}}>
            <View
                style={{width: 60,  
                        height: 60,   
                        borderRadius: 30,            
                        backgroundColor: this.props.currentPodcast.signed ? '#ef5350' : '#9ccc65',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'                                    
                        }}
            >
              <FontAwesome style={{fontSize: 25, color: 'white'}}>
                { 
                  this.props.currentPodcast.signed
                  ? Icons.times
                  : Icons.check
                }
              </FontAwesome>
            </View>
            </TouchableOpacity>)
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
    signPodcast: signPodcast,
    unsignPodcast: unsignPodcast,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetailScreen);