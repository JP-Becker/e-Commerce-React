import { ContainerFiltros, Select, Label, Option, Form, Input, ButtonCarrinho, P, NomeP } from "./styledFiltros"
import carrinho from "../../assets/shopping-cart.png"

export const Filtros = (props) => {
    const handleSearch = (e) => {
        props.setBuscaNome(e.target.value)
    }
    const handlePriceFilter = (e) => {
        props.setPrice(e.target.value)
    }
    const handleOrdena = (e) => {
        props.setOrdena(e.target.value)
    }
    const handleType = (e) => {
        props.setType(e.target.value)
    }
    const bubblePopUp = () => { // faz aparecer o pop-up no botao do carrinho a partir do primeiro click no botão
        if (props.itensNumero >= 1) {
            return(
                <div>
                    <p>{props.itensNumero}</p>
                </div> 
            )
              
        }
    }

    return (  
        <ContainerFiltros>
            <Form>
                <Label>
                    <NomeP>Busque por nome</NomeP>
                    <Input type="text" placeholder="Digite um produto" value={props.buscaNome} onChange={handleSearch}/>
                </Label>
                <P>Filtre por preço:</P>          
                <Select onChange={handlePriceFilter}>
                    <Option value={''}>-</Option>
                    <Option value={100.00}>Até 100R$</Option>
                    <Option value={1000.00}>Até 1.000R$</Option>
                    <Option value={5000.00}>Até 5.000R$</Option>
                    <Option value={5001.00}>Acima de 5.000R$</Option>
                </Select>
                <P>Ordene Alfabeticamente:</P>
                <Select onChange={handleOrdena}>
                    <Option value="">-</Option>
                    <Option value="Crescente">Crescente</Option>
                    <Option value="Descrescente">Decrescente</Option>
                </Select>           
                <P>Busque por tipo:</P>
                <Select onChange={handleType} >
                    <Option value="">-</Option>
                    <Option value="meteorito">Meteoritos</Option>
                    <Option value="miniatura">Miniaturas</Option>
                    <Option value="réplica">Réplicas</Option>
                    <Option value="objeto">Objetos Reais</Option>
                    <Option value="comida">Comidas</Option>
                </Select>
            </Form>
            <h3>Carrinho</h3>
            {bubblePopUp()}
            <ButtonCarrinho onClick={props.irProCarrinho}>
                <img src={carrinho}></img>
            </ButtonCarrinho>
        </ContainerFiltros>
        
    )
}