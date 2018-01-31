const initialState = {
    top: null,
    topFetching: false,
    topFetched: false,
    topError: null,
    podcasts: null,
    searchingPodcast: false,
    searchedPodcast: false,
    searchPodcastError: null,
}

export default function(state=initialState, action) {
    switch(action.type) {
        case "TOP_PENDING":
            return {...state, topFetching: true};

        case "TOP_FULFILLED":
            return {...state, 
                    topFetching: false,
                    topFetched: true,
                    top: action.payload};

        case "TOP_REJECTED":
            return {...state, topFetching: false, topError: action.payload};
        
        case "SEARCH_PENDING":
            return {...state, searchingPodcast: true};

        case "SEARCH_FULFILLED":
            return {...state,
                    searchingPodcast: false,
                    searchedPodcast: true,
                    podcasts: action.payload.data.results};

        case "SEARCH_REJECTED":
            return {...state,
                    searchingPodcast: false,
                    searchPodcastError: action.payload.data};
        
        case "RESET_SEARCH":
            return {...state,
                    podcasts: null,
                    searchingPodcast: false,
                    searchedPodcast: false,
                    searchPodcastError: null};
        
        default:
            return {...state};
    }
}