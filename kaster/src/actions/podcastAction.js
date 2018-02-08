import { AsyncStorage } from 'react-native';

export function getSignedPodcasts() {
    return async (dispatch) => {
        // Get signed podcasts from the store
        let signedPodcasts = await AsyncStorage.getItem('@SignedPodcasts');
        let podcasts = []
        if(signedPodcasts) {
            signedPodcasts = JSON.parse(signedPodcasts);

            // Get the data for each signed podcast
            for (let index = 0; index < signedPodcasts.podcasts.length; index++) {
                let aux = await AsyncStorage.getItem("@Podcasts:"
                                                      + signedPodcasts.podcasts[index]);
                podcasts.push(JSON.parse(aux));
            }

            dispatch({
                type: 'SIGNED_PODCASTS',
                payload: podcasts,
            })
        }
    }
    
}