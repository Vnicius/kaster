import axios from 'axios';

export function fetchTop(country) {
    return {
        type: "TOP",
        payload: axios.get('https://rss.itunes.apple.com/api/v1/'
                           + country
                           + '/podcasts/top-podcasts/all/25/explicit.json')
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