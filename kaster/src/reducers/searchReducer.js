const initialState = {
    top: null,
    topFetching: false,
    topFetched: false,
    topError: null,
    podcast: null,
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
        
        default:
            return {...state};
    }
}