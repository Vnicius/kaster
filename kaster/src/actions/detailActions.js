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
            .then((response) => {
                dispatch({type: "FETCH_PODCAST_FULFILLED",
                          payload: response});
                
                dispatch({type: "FETCH_FEED_PENDING"});

                axios.get(response.data.results[0].feedUrl)
                    .then((response) => {
                        dispatch({type: "FETCH_FEED_FULFILLED",
                                  payload: response});
                    })
                    .catch((error) => {
                        dispatch({type: "FETCH_FEED_ERROR",
                                  payload: error});
                    })
            })
            .catch((error) => {
                dispatch({type: "FETCH_PODCAST_ERROR",
                          payload: error});
            })
    }
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