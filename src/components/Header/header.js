import { HeaderContainer, DivCtt, DivLogo } from "./styledHeader"
import { Carrinho } from "../Carrinho/carrinho"
import github from "../../assets/github logo.svg"
import linkedin from "../../assets/linkedin-logo.png"

export const Header = () => {
    return (
        <HeaderContainer>
            <a href={"https://github.com/JP-Becker"}>
                <img src={github}></img>
            </a>         
            <a href={"https://www.linkedin.com/in/jo%C3%A3o-pedro-becker-aab88423b/"}>
                <img src={linkedin}></img>
            </a>
            <DivLogo>
                <h1>JP Artigos Espaciais</h1>             
            </DivLogo>
            <DivCtt>
                <p>jpbecker20@gmail.com</p>
                <p>+55 48 99966-6847</p>
            </DivCtt>
        </HeaderContainer>
    )
}