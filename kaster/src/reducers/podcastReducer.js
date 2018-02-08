const initialState = {
    signedPodcasts: null,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case 'SIGNED_PODCASTS':
            return {...state, signedPodcasts: action.payload};

        default:
            return {...state}
    }
}