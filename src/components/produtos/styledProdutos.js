import styled from "styled-components";

export const ProdutosContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    grid-column: 2/3;
    margin-top: 15vh;
`

export const Produto = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 225px;
    height: 300px;
    margin-bottom: 30px;
    border: 3px solid #0F99B7;
`

export const Imagem = styled.img`
    width: 218px;
    height: 150px;
    text-align: center;
`

export const Descricao = styled.div`
    text-align: center;
    text-transform: uppercase;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const NomeProduto = styled.h4`
    font-family: 'Oswald';
    font-size: 1.2rem;
    margin: 0 10px;
    font-weight: 700;
`

export const Preco = styled.h5`
    font-family: 'Courier New', Courier, monospace;:
    font-weight: bold;
    font-size: 1rem;
    padding-top: 8px;
    margin-top: 10px;
`

export const ButtonAdicionar = styled.button`
    margin-top: 4px;
    width: fit-content;
    text-align: center;
    padding: 0 8px;
    border-color: black;
    border-style: none;
    font-family: 'Oswald';
    font-size: 1rem;

    :hover {
        background: #0F99B7;
        background: -webkit-linear-gradient(top left, #0F99B7, #82D3FF);
        background: -moz-linear-gradient(top left, #0F99B7, #82D3FF);
        background: linear-gradient(to bottom right, #0F99B7, #82D3FF);
        color: white;
        transform: scale(1.075);
        transition: 0.2s;
    }
`