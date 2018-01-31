import axios from 'axios';

export function fetchTop() {
    return (dispatch) => {
        axios.get('https://freegeoip.net/json/')
            .then(response => {
                dispatch({type: "TOP_PENDING"});

                axios.get('https://rss.itunes.apple.com/api/v1/'
                           + response.data.country_code.toLowerCase()
                           + '/podcasts/top-podcasts/all/25/explicit.json')
                    .then(response => {
                        dispatch({type: "TOP_FULFILLED", payload: response.data});

                    })
                    .catch(err => {
                        dispatch({type: "TOP_REJECTED", payload: err});
                    })
            })
            .catch(err => {
                alert(err);
            })
    }
}

export function searchPodcast(term) {
    return {
        type: "SEARCH",
        payload: axios.get('https://itunes.apple.com/search?term='
                           + encodeURI(term)
                           + '&entity=podcast')
    }
}

export function resetSearch() {
    return {
        type: "RESET_SEARCH",
    }
}