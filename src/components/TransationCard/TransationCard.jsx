import styled from "styled-components"


function TransationCard(){
    return(
        <ListItemContainer>
            <div>
                <DataRegistro>{data}</DataRegistro>
                <strong data-test="regitry-name">{descricao}</strong>
            </div>
            <TipoDeRegistro color={tipo} data-test="registry-amount">{valor}</TipoDeRegistro>
        </ListItemContainer>
    )
}

export default TransationCard




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
const TipoDeRegistro = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`
const DataRegistro = styled.span`
  font-family: "Raleway";
  font-size: 16px;
  color: #C6C6C6;
`