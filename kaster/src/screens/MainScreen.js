import React from 'react';

import { TabNavigator } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import SearchScreen from './SearchScreen';
import PodcastsScreen from './PodcastsScreen';
import ListeningScreen from './ListeningScreen';
import ReleasesScreen from './ReleasesScreen';
import PlaylistsScreen from './PlaylistsScreen';

const MainScreen = TabNavigator({
  Search: { 
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome 
              style={{color: tintColor, fontSize: 20,}}>
          {Icons.search}
        </FontAwesome>
      ),
    }
  },
  Podcasts: { 
    screen: PodcastsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome 
              style={{color: tintColor, fontSize: 20,}}>
          {Icons.podcast}
        </FontAwesome>
      ),
    }
  },
  Listening: { 
    screen: ListeningScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome 
              style={{color: tintColor, fontSize: 20,}}>
          {Icons.headphones}
        </FontAwesome>
      ),
    }
  },
  Releases: { 
    screen: ReleasesScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome 
              style={{color: tintColor, fontSize: 20,}}>
          {Icons.refresh}
        </FontAwesome>
      ),
    }
  },
  Playlists: { 
    screen: PlaylistsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome 
              style={{color: tintColor, fontSize: 20,}}>
          {Icons.list}
        </FontAwesome>
      ),
    }
  },
},{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#512da8',
    inactiveTintColor: 'gray',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: "#512da8",
    },
    style: {
      backgroundColor: 'white',
    },
    pressColor: "#512da8",
    labelStyle:{
      fontSize: 9,
      marginBottom: 0,
    },
  }  
});

export default MainScreen;