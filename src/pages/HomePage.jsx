import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import UserContext from "../TipoContext.jsx/UserContext"
import TipoContext from "../TipoContext.jsx/TipoContext"
import { useContext, useEffect, useState } from "react"
import apiTrans from "../services/apiTrans"
import TransationCard from "../components/TransationCard/TransationCard"


export default function HomePage() {
  const { user } = useContext(UserContext)
  // console.log(user, "home")
  const [transacoes, setTransacoes] = useState([])  
  const { setTipo } = useContext(TipoContext)

  useEffect(listarTransacoesList, [])

  function listarTransacoesList (){
    apiTrans.listarTransacoes(user.token)
      .then(ress =>{    
        setIsLoading(false)    
        //console.log(res.data)
        setTransacoes(res.data)
      })
      .catch(err => {
        setIsLoading(false) 
        alert(err.responde.data.message)
      })
  }

  

  function adicionar(){
    setTipo(entrada)
    navigate("/nova-transacao/:tipo")
  }

  function retirar(){
    setTipo(saida)
    navigate("/nova-transacao/:tipo")
  }

  return (
    <HomeContainer>
      <Header>
        <h1 data-test="user-name">Olá, {user.name}</h1>
        <BiExit data-test="logout"/>
      </Header>
      
      <TransactionsContainer>
        <ul>
          { transacoes.length === 0 ? (
            <SemRegistro>Não há registros de entrada ou saída</SemRegistro>
            ) : (
                <>{transacoes.map(t =>{
                  <TransationCard 
                  data={t.data}
                  descricao={t.descricao}
                  tipo={t.tipo}
                  valor={t.valor}
                  />
                })}</>
            )
          }
                   
        </ul>

        <article>
          <strong>Saldo</strong>
          <Value color={"positivo"} data-test="total-amount">{soma}</Value>
        </article>
      </TransactionsContainer>


      <ButtonsContainer>
        <button onClick={adicionar()} data-test="new-income">
          <AiOutlinePlusCircle />
          <p>Nova <br /> entrada</p>
        </button>
        <button onClick={retirar()} data-test="new-expense">
          <AiOutlineMinusCircle />
          <p>Nova <br />saída</p>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`

const SemRegistro = styled.p`
  font-family: "Raleway";
  font-size: 20px;  
`