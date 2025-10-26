import axios from "axios";

let LOGIN_BASE_URL = "http://localhost:9090/login";

export let loginSignIn = async (login)=> {
    let result = await axios.post(LOGIN_BASE_URL+"/signIn",login)
    return result.data;
}

export let loginSignUp = async (login)=> {
    let result = await axios.post(LOGIN_BASE_URL+"/signUp",login)
    return result.data;
}

