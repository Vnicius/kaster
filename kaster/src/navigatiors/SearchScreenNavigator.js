import { StackNavigator } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import PodcastDetailScreen from '../screens/PodcastDetailScreen';

export default StackNavigator({
    Home: {
      screen: SearchScreen,
    },
    PodcastDetail: {
      screen: PodcastDetailScreen,
    }
  });