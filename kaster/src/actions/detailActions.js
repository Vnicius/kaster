import { AsyncStorage } from 'react-native';
import { xml2json, removeMetaKeys } from '../functions/xmlHelpers';

import axios from 'axios';

export function fetchPodcast(id) {
    return {
        type: "FETCH_PODCAST",
        payload: axios.get('https://itunes.apple.com/lookup?id=' + id)
    }
}

export function fetchPodcastAndFeed(id) {
    return (dispatch) => {
        dispatch({type: "FETCH_PODCAST_PENDING"});

        axios.get('https://itunes.apple.com/lookup?id=' + id)
            .then(async (response) => {
                // get the response data
                var responsePodcast = response.data.results[0];
                
                dispatch({type: "FETCH_PODCAST_FULFILLED",
                          payload: responsePodcast});

                // get the podcast from the storage
                var podcastLocal = await AsyncStorage.getItem("@Podcasts:" + id);

                if(podcastLocal) {
                    // parse the string to json
                    podcastLocal = JSON.parse(podcastLocal);

                    // check if the podcast was updated
                    if (podcastLocal.releaseDate === responsePodcast.releaseDate) {
                        // get the feed in the local storage
                        var feedLocal = await AsyncStorage.getItem("@FeedMinimum:" + id)

                        if (feedLocal) {
                            // parse the feed to json
                            feedLocal = JSON.parse(feedLocal);

                            dispatch({type: "FETCH_FEED_FULFILLED",
                                      payload: feedLocal});
                        } else {
                            // get the feed
                            dispatchFetchFeed(dispatch, podcastLocal.feedUrl, id);
                        }
    
                    } else {
                        // update the podcast data
                        await AsyncStorage.removeItem("@Podcasts:" + id);
                        await AsyncStorage.setItem("@Podcasts:" + id,
                                                    JSON.stringify(responsePodcast));
                        
                        // get the actual feed
                        dispatchFetchFeed(dispatch, podcastLocal.feedUrl, id);
                    }

                } else {
                    // save the podcast in the storage
                    await AsyncStorage.setItem("@Podcasts:" + id,
                                                JSON.stringify(responsePodcast));

                    dispatchFetchFeed(dispatch, responsePodcast.feedUrl, id);
                }

            })
            .catch((error) => {
                dispatch({type: "FETCH_PODCAST_ERROR",
                          payload: error});
            })
    }
}

function dispatchFetchFeed(dispatch, feedUrl, id) {
    dispatch({type: "FETCH_FEED_PENDING"});

    axios.get(feedUrl)
        .then(async (response) => {
            // get the response xml and make a parse
            var feed = xml2json(response.data);
            feed.item = [feed.item[0]]
            removeMetaKeys(feed);

            dispatch({type: "FETCH_FEED_FULFILLED",
                        payload: feed});
            
            // save the feed in the local storage
            await AsyncStorage.setItem("@FeedMinimum:" + id,
                                        JSON.stringify(feed));
            
        })
        .catch((error) => {
            dispatch({type: "FETCH_FEED_ERROR",
                        payload: error});
        })
}

export function fetchFeed(feedUrl) {
    console.log(feedUrl)
    return {
        type: "FETCH_FEED",
        payload: axios.get(feedUrl)
    }
}

export function reset() {
    return {
        type: "RESET"
    }
}