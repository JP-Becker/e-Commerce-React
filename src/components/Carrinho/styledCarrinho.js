import styled from "styled-components"

export const Titulo = styled.h1`
    margin: 250px;
`

export const Item = styled.section`
    margin-top: 25px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    border-bottom: 3px solid #0F99B7;
    padding-left: 12vw;
    padding-bottom: 16px;
    font-family: 'Oswald';
`

export const ImagemProduto = styled.img`
    min-width: 90px;
    height: 70px;
    border-radius: 25%;
`

export const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    h1 {
        font-size: 2.5em;
        text-align: center;
        margin-top: 10vh;
        font-family: 'Oswald';
    }

`

export const SetoresDiv = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    font-size: 1.5em;
    font-family: 'Oswald'
`

export const ItensDiv = styled.main`
    display: flex;
    flex-direction: column;
`

export const ProdutoDiv = styled.div`
    width: 300px;
    display: flex;
    align-items: center;

    h3 {
        margin-left: 8px;
        font-family: 'Oswald';
    }
`

export const DivQtd = styled.div`
    margin: 0 16.3vw;
    display: flex;
    text-align: center;
    align-items: center;

    p {
        width: 16px;
        text-align: center;
    }
`

export const ButtonMais = styled.button`
    font-size: 1.5em;
    font-weight: 600;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    border: none;
    border-radius: 100%;

    :hover {
        color: white;
        background: #0F99B7;
        background: -webkit-linear-gradient(top left, #0F99B7, #82D3FF);
        background: -moz-linear-gradient(top left, #0F99B7, #82D3FF);
        background: linear-gradient(to bottom right, #0F99B7, #82D3FF);
    }
`

export const ButtonMenos = styled.button`
    font-size: 1.5em;
    font-weight: 600;
    height: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    border: none;
    border-radius: 100%;

    :hover {
        color: white;
        background: red;
    }
`

export const Qtd = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`

export const Preco = styled.p`
    margin-left: 7.7vw;
    font-size: 1.2rem;
    font-family: 'Oswald';
    font-weight: 700;
`

export const RemoveButton = styled.button`
    padding: 4px 10px;
    margin-left: auto;
    margin-right: 70px;
    border-radius: 16px;
    background: red;
    color: white;

    :hover {
        background: #ff726f;
        transform: scale(1.03);
    }
`

export const DivFinaliza = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-family: 'Oswald';
        font-weight: 700;
    }

    p {
        margin-top 8px;
        margin-bottom: 12px;
    }
`

export const ButtonFinal = styled.button`
    width: 150px;
    margin-bottom: 4px;
    border-color: white;
    

    :hover {
        color: white;
        background: #0F99B7;
        background: -webkit-linear-gradient(top left, #0F99B7, #82D3FF);
        background: -moz-linear-gradient(top left, #0F99B7, #82D3FF);
        background: linear-gradient(to bottom right, #0F99B7, #82D3FF);
        transform: scale(1.05);
    }
`

export const CarrinhoVazio = styled.h2`
    text-align: center;
    font-family: Oswald;
`

export const DivEmptyCart = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`

