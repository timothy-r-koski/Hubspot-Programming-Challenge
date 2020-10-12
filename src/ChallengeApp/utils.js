export const isEmpty = (map) => {
    if(typeof map == 'undefined'){
        return true;
    }
    for(var key in map) {
        if (map.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

