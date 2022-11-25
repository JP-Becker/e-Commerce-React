import styled from "styled-components"

export const ContainerFiltros = styled.nav`
    position: fixed;
    top: 0;
    left: 0;

    background: #0F99B7;
    background: -webkit-linear-gradient(top left, #0F99B7, #82D3FF);
    background: -moz-linear-gradient(top left, #0F99B7, #82D3FF);
    background: linear-gradient(to bottom right, #0F99B7, #82D3FF);
    width: 265px;
    height: 80vh;
    margin-top: 15vh;
    margin-left: 2vw;
    border-radius: 38px;

    h3 {
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Oswald';
        font-weight: 700;
        text-align: center;
        margin-top: 28px;
        margin-bottom: 3px;
        color: white;
    }

    div {
        position: absolute;
        display: flex;
        left: 188px;
        bottom: 140px;
        width: 40px;
        height: 35px;
        border-radius: 100%;
        background-color: red;
        justify-content: center;
        
        p {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    img {
        width: 150px;
        height: 150px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    text-align: center;
    margin: 0 10%;
`

export const Select = styled.select`
    padding: 3px 5px;
    font-family: 'Oswald';
    font-size: 1.08rem;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    padding: 3px 5px;
    font-family: 'Oswald';
    font-size: 1.1rem;
`

export const Option = styled.option`
    font-family: 'Oswald';
    font-size: 1.12rem;
`

export const NomeP = styled.p`
    color: white;
    font-family: 'Oswald';
    font-size: 1.2rem; 
`

export const P = styled.p`
    color: white;
    margin-top: 2.3rem;   
    font-size: 1.2rem; 
    font-family: 'Oswald'
`

export const ButtonCarrinho = styled.button`
    width: 170px;
    height: 160px;
    margin: 0 47.5px;
    background-color: yellow;
    border-radius: 25%;
    border: 2px solid black;
    background: #0F99B7;
    background: -webkit-linear-gradient(top left, #0F99B7, #82D3FF);
    background: -moz-linear-gradient(top left, #0F99B7, #82D3FF);
    background: linear-gradient(to bottom right, #0F99B7, #82D3FF);

    :hover {
        border: 4px solid white;
        transition: .2s;
    }
`