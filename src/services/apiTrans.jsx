import axios from "axios"

function createConfig(token){
    return {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
}

function listarTransacoes(token) {
    //console.log(token)
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/transacoes`, createConfig(token))      
    return promise
}

function adicionarTransacao(token){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/transacoes`, createConfig(token))    
    return promise
}

const apiTrans = {listarTransacoes, adicionarTransacao}
export default apiTrans