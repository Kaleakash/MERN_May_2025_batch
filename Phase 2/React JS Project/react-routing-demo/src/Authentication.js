function Authentication() {

    return sessionStorage.getItem("user")!==null;   // if present true else false. 
}

export default Authentication;