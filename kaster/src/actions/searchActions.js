import axios from 'axios';

export function fetchTop(country) {
    return {
        type: "TOP",
        payload: axios.get('https://rss.itunes.apple.com/api/v1/'
                           + country
                           + '/podcasts/top-podcasts/all/25/explicit.json')
    }
}

export function fetchPodcast(id) {
    return {
        type: "FETCH_PODCAST",
        payload: axios.get('https://itunes.apple.com/lookup?id=' + id)
    }
}