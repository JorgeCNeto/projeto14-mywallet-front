import axios from "axios"

function login(body) {
    //console.log(body, "body cadastro")
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/login`, body)
    //console.log(promise)
    return promise
}

function signUp(body){
    //console.log(body, "body cadastro")
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)
    
    return promise
}

const apiAuth = {login, signUp}
export default apiAuth