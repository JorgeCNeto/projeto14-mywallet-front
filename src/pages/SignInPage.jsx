import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useNavigate } from "react-router-dom"
import apiAuth from "../services/apiAuth"
import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const { setUserName, setToken } = useContext(UserContext)
  const navigate = useNavigate()
    
    function handleLogin(e){
        e.preventDefault()

        const logar = {email, senha}
        
        apiAuth.login(logar)
        .then(res => {
                       
            // let localStorageContent = localStorage
            // console.log(res.data, "res.data")
            // const {name, token, email} = res.data

            // if(!Array.isArray(localStorageContent)){
            //     localStorageContent = [localStorageContent]
            // }

            // localStorageContent.forEach(item => {
            //     if(item.token === token){
            //         navigate("/home")
            //         return 
            //     } else {
            //         localStorage.setItem("token", token)
            //         navigate("/home")
            //     }
            // });            
            
            setUserName(res.data.userName)   
            setToken(res.data.token)  
            localStorage.setItem("userName", res.data.userName)
            localStorage.setItem("token", res.data.token)
            navigate("/home")
                       
        })
        .catch(err => {
            alert(err.response.data.message)
        })

        
    }
  
  
  
  return (
    <SingInContainer>
      <form onSubmit={handleLogin}>
        <MyWalletLogo />
        <input 
          placeholder="E-mail" 
          type="email" 
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          data-test="email"
        />
        <input 
          placeholder="Senha" 
          type="password" 
          autocomplete="new-password" 
          required
          value={senha}
          onChange={e => setSenha(e.target.value)}
          data-test="password"
        />
        <button type="submit" data-test="sign-in-submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
