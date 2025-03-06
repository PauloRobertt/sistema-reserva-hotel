import postLogin from "./metodosHTTP/postLogin.js"
import postRegister from "./metodosHTTP/postRegister.js"

export default{
    '/auth/login':{
        ...postLogin
    },
    '/auth/register':{
        ...postRegister
    }
}
