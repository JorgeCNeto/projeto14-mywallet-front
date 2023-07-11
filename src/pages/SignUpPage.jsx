import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import apiAuth from "../services/apiAuth"
import { useState } from "react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")
  const [confirmacao, setConfirmacao] = useState("")    
  const navigate = useNavigate()
  
  function handleSignUp(e){
      e.preventDefault()
      
      if (senha === confirmacao) {
        const cadastro = {nome, email, senha}

        apiAuth.signUp(cadastro)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            alert(err.response.data.message)
        })
      }   
      
  }



  return (
    <SingUpContainer>
      <form onSubmit={handleSignUp}>
        <MyWalletLogo />
        <input 
          placeholder="Nome" 
          type="text" 
          required 
          value={nome}
          onChange={e => setNome(e.target.value)}
          data-test="name"
        />
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
        <input 
          placeholder="Confirme a senha" 
          type="password" 
          autocomplete="new-password" 
          required
          value={confirmacao}
          onChange={e => setConfirmacao(e.target.value)}
          data-test="conf-password"
        />
        <button type="submit" data-test="sign-up-submit">Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
