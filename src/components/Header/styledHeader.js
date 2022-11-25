import styled from 'styled-components';


export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100vw;
    height: 10vh;
    background: #0F99B7;
    background: -webkit-linear-gradient(top left, #0F99B7, #82D3FF);
    background: -moz-linear-gradient(top left, #0F99B7, #82D3FF);
    background: linear-gradient(to bottom right, #0F99B7, #82D3FF);
    justify-content: center;
    align-items: center;

    img {
        height: 8vh;
        padding-left: 16px;
    }

    h1 {
        font-family: 'Rubik Bubbles';
        font-weight: bold;
        font-style: italic;
        font-size: 2.5rem;
        color: white;
        padding: 8px;
        letter-spacing: 4px;
        display: inline;
        height: 100%;
    }

    a {
        margin-left: 20px;
    }
`

export const DivCtt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 36px;

    p {
        color: white;
    }
`

export const DivLogo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
`
    
