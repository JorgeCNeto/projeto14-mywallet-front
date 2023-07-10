import from "axios"

const BASE_URL = ""

function login(body) {
    //console.log(body, "body cadastro")
    const promise = axios.post(`${BASE_URL}/login`, body)
    console.log(promise)
    return promise
}

function signUp(body){
    //console.log(body, "body cadastro")
    const promise = axios.post(`${BASE_URL}/cadastro`, body)
    
    return promise
}

const apiAuth = {login, signUp}
export default apiAuth