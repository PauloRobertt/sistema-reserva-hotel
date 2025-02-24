import getQuarto from './metodosHTTP/metodosHTTP/get.js';
import getIdQuarto from './metodosHTTP/metodosHTTP/getId.js';
import postQuarto from './metodosHTTP/metodosHTTP/post.js';
import putQuarto from './metodosHTTP/metodosHTTP/put.js';
import deleteQuarto from './metodosHTTP/metodosHTTP/delete.js';


export default {
    '/quarto': {
        ...getQuarto,
        ...postQuarto,
    },
    '/quarto/{id}': {
        ...getIdQuarto,
        ...putQuarto,
        ...deleteQuarto
    }
}