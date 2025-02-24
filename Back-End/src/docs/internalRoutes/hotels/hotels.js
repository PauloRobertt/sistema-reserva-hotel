import getHotel from './metodosHTTP/get.js';
import getIdHotel from './metodosHTTP/getId.js';
import postHotel from './metodosHTTP/post.js';
import putHotel from './metodosHTTP/put.js';
import deleteHotel from './metodosHTTP/delete.js';

export default{
    '/hotel':{
        ...getHotel,
        ...postHotel,
    },
    '/hotel/{id}':{
        ...getIdHotel,
        ...putHotel,
        ...deleteHotel
    }
}