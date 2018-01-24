const initialState = {
    top: {},
    topFetching: false,
    topFetched: false,
    topError: null,
    podcast: {},
    fetchingPodcast: false,
    fetchedPodcast: false,
    fetchPodcastError: null,
    
}

export default function(state=initialState, action) {
    switch(action.type) {
        case "TOP_PENDING":
            return {...state, topFetching: true};

        case "TOP_FULFILLED":
            return {...state, 
                    topFetching: false,
                    topFetched: true,
                    top: action.payload.data};

        case "TOP_REJECTED":
            return {...state, topFetching: false, topError: action.payload};

        case "FETCH_PODCAST_PENDING":
            return {...state, fetchingPodcast: true};
        
        case "FETCH_PODCAST_FULFILLED":
            return {...state,
                    fetchingPodcast: false,
                    fetchedPodcast: true,
                    podcast: action.payload.data.results[0]}
        
        case "FETCH_PODCAST_REJECTED":
            return {...state, fetchingPodcast: false,
                    fetchPodcastError: action.payload.data}
        
        default:
            return {...state};
    }
}