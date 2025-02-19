import get from './metodosHTTP/get.js';
import getId from './metodosHTTP/getId.js';
import post from './metodosHTTP/post.js';
import put from './metodosHTTP/put.js';
import _delete from './metodosHTTP/delete.js';

export default {
    '/usuario': {
        ...get,
        ...post
    },
    '/usuario/{id}':{
        ...getId,
        ...put,
        ..._delete
    }
}
