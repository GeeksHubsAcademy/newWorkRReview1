
import axios from 'axios';

var root = 'https://rickandmortyapi.com/api';

export const bringCharacters = async () => {

    let config = {
        method: 'get',
        url: `${root}/character`
    }

    return await axios(config);
};

