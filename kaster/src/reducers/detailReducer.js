const initialState = {
    currentPodcast: null,
    fetchingPodcast: false,
    fetchedPodcast: false,
    fetchPodcastError: null,
    feed: null,
    fetchingFeed: false,
    fetchedFeed: false,
    fetchFeedError: null,
}

export default (state=initialState, action) => {
    switch(action.type) {

        case "FETCH_PODCAST_PENDING":
            return {...state, fetchingPodcast: true};
        
        case "FETCH_PODCAST_FULFILLED":
            return {...state,
                    fetchingPodcast: false,
                    fetchedPodcast: true,
                    currentPodcast: action.payload};
        
        case "FETCH_PODCAST_REJECTED":
        case "FETCH_PODCAST_ERROR":
            return {...state, fetchingPodcast: false,
                    fetchPodcastError: action.payload};
        
        case "FETCH_FEED_PENDING":
            return {...state, fetchingFeed: true};

        case "FETCH_FEED_FULFILLED":
            return {...state, feed: action.payload};

        case "FETCH_FEED_REJECTED":
        case "FETCH_FEED_ERROR":
            return {...state, fetchingFeed: false, fetchFeedError: action.payload};
        
        case "RESET":
            return {...initialState};
        
        case "SIGN":
            var currentPodcast = {...state.currentPodcast};
            currentPodcast.signed = true;

            return {...state, currentPodcast: {...currentPodcast}}
        
        case "UNSIGN":
            var currentPodcast = {...state.currentPodcast};
            currentPodcast.signed = false;

            return {...state, currentPodcast: {...currentPodcast}}
        
        default:
            return {...state};
    }
}