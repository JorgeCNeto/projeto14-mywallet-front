import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TransactionsPage from "./pages/TransactionPage"
import { useState } from "react"
import  UserContext  from "./contexts/UserContext"
import  TipoContext  from "./contexts/TipoContext"

export default function App() {
  const[userName, setUserName] = useState(localStorage.getItem("userName"))
  const [token, setToken] = useState(localStorage.getItem("token"))
  const[tipo, setTipo] = useState("")
  
  return (
    <PagesContainer>
      <BrowserRouter>
        <UserContext.Provider value={{userName, setUserName, token, setToken } }>
          <TipoContext.Provider value={{tipo, setTipo}}>
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/nova-transacao/:tipo" element={<TransactionsPage />} />
            </Routes>
          </TipoContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
