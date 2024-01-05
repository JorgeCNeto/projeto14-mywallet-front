import styled from "styled-components"
import { useContext } from "react"
import TipoContext from "../contexts/TipoContext"

export default function TransactionsPage() {
  const { tipo } = useContext(TipoContext)
  console.log(tipo, "tipo")
  return (
    <TransactionsContainer>
      <h1>Nova {tipo}</h1>
      <form>
        <input placeholder="Valor" type="text" data-test="registry-amount-input"/>
        <input placeholder="Descrição" type="text" data-test="registry-name-input"/>
        <button data-test="registry-save">Salvar {tipo}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
