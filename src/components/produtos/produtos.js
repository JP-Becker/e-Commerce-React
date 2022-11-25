import React from 'react'
import { Imagem, NomeProduto, Produto, Descricao, ProdutosContainer, Preco, ButtonAdicionar } from './styledProdutos'

export const Produtos = (props) => {

    function adicionarAoCarrinho (e) {
        props.setItensNumero(props.itensNumero + 1) // muda o valor do pop-up do carrinho a cada clique do botao "Adicionar ao carrinho"
        props.setValorBotao(e.target.value) // seta o valor do botao com a id do produto que foi clicado
    }
    

    return(
        <ProdutosContainer>
            {props.lista.filter((produto) => {
                return produto.nome.toLowerCase().includes(props.buscaNome.toLowerCase())
            }) 
                .filter((produto) => { // filtra por preço
                    if (props.price == 5001.00) {
                        return produto.preco
                    } else if (props.price >= produto.preco){
                        return produto.preco
                    } else if (props.price == ''){
                        return produto
                    }
                })
                    .filter((produto) => { // filtra por tipo
                         return produto.tipo.includes(props.type)
                    })
                        .sort((a, b) => { // ordena alfabeticamente
                                if (props.ordena === "Crescente"){
                                if(a.nome < b.nome) {
                                    return -1; 
                                } else if(a.nome > b.nome) {
                                    return 1; 
                                } else {
                                    return 0;
                                }
                                } else if (props.ordena === "Descrescente") {
                                if(a.nome < b.nome) {
                                    return 1; 
                                } else if(a.nome > b.nome) {
                                    return -1; 
                                } else {
                                    return 0;
                                }
                                }
                        })
                            .map((produto) => { // mapeia a lista de produtos para retornar o card de cada um
                                return (
                                    <Produto key={produto.id}>
                                        
                                        <Imagem src={produto.imagemUrl} alt="imagem do produto"></Imagem>
                                        <Descricao>
                                            <NomeProduto>{produto.nome}</NomeProduto>
                                            <Preco>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Preco>
                                            <ButtonAdicionar onClick={props.addCart} onMouseDown={adicionarAoCarrinho} value={produto.id}>Adicionar ao carrinho</ButtonAdicionar>
                                        </Descricao>
                                    </Produto>
                                    )
                            })}
        </ProdutosContainer>
    )
}