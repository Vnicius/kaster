import { parseString } from 'react-native-xml2js';

export function xml2json(xml) {
    var returnObj = null;

    parseString(xml, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            returnObj = result.rss.channel[0];
            removeMetaKeys(returnObj);
        }
    });

    return returnObj;
}

export function removeMetaKeys(json) {
    /* Remove all metakeys, and replace the keys from itunes*/

    var keys = Object.keys(json);

    keys.forEach((value) => {
        if(value === "item") {
            json.item = [json.item[0]]  // get only de last episode
        }

        // Remove the 'itunes:' reference from the keys
        if(value.search('itunes:') >= 0) {
            json[value.replace('itunes:', '')] = {...json[value]};
            delete json[value]
        }
        else if(value.search(':') > 0) {
           delete json[value] // remove another the metakeys
        }
        else if(json[value] instanceof Object) {
            // If is a object, use recursion
            removeMetaKeys(json[value])
        }
        else if (json[value] instanceof Array) {
            // If is a array, use recursion in the object elements
            json[value].forEach((element) => {
                if(element instanceof Object){
                    removeMetaKeys(element);
                }
            });
        }
    })
}