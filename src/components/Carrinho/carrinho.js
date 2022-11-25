import React from "react";
import line from "../../assets/Line.png"
import { Item, ImagemProduto, ContainerCarrinho, ItensDiv, ProdutoDiv, SetoresDiv, Qtd, Preco, RemoveButton, DivFinaliza, ButtonFinal, DivQtd, ButtonMais, ButtonMenos, CarrinhoVazio, DivEmptyCart } from "./styledCarrinho";
import { useState } from "react";
import { useEffect } from "react";

export const Carrinho = (props) => {
    function removeItem (item) { // função para remover item
        const listaFiltrada = props.cart.filter((produto) => {
            return produto !== item // retorna os produtos que nao foram removidos
        })
        props.setCart(listaFiltrada) // muda o valor do array "cart" com o item removido
        props.setItensNumero(props.itensNumero - item.qtd) // reduz o número do pop-up vermelho na outra página
    }

    const handleIncrement = (itemId) => { // função para adicionar uma unidade do item desejado
        const precoInicial = props.lista.find((item) => { // pegando o valor inicial do item na lista
            return item.id == itemId
        })

        const findItem = props.cart.find((item) => { // pegando o produto referente ao incremento
            return item.id === itemId
        })

        findItem.qtd++ // aumenta a quantidade do produto
        findItem.preco += precoInicial.preco // aumenta o preço
        props.setItensNumero(props.itensNumero + 1)

        props.setCart([...props.cart]) // seta o carrinho para as mudanças ocorrerem na tela
    }

    const handleDecrement = (itemId) => { // função para remover uma unidade do item
        const precoInicial = props.lista.find((item) => {
            return item.id == itemId
        })

        const findItem = props.cart.find((item) => {
            return item.id === itemId
        })
        findItem.qtd--
        findItem.preco -= precoInicial.preco
        props.setItensNumero(props.itensNumero - 1)

        if (findItem.qtd >= 1) { // se a quantidade for menor que 1 remove do carrinho
            props.setCart([...props.cart])
        } else {
            removeItem(findItem)
            props.setItensNumero(props.itensNumero - 1)
        }

    }
    

    let total = 0 
    props.cart.forEach(item => { // soma o valor de todos os itens do carrinho
        total = total + item.preco
    })
    
    return (
        <ContainerCarrinho>
            <h1>Meu Carrinho</h1>
            <SetoresDiv>
                <p>Item</p>
                <p>Quantidade</p>
                <p>Valor</p>
            </SetoresDiv>
            <ItensDiv>
        {props.cart.map((item, index) => {
                return (                   
                    <Item key={index}>
                        <ProdutoDiv>
                            <ImagemProduto src={item.imagemUrl}></ImagemProduto>
                            <h3>{item.nome}</h3>
                        </ProdutoDiv>
                        <DivQtd>
                            <ButtonMenos onClick={() => handleDecrement(item.id)}><div>-</div></ButtonMenos>
                            <p>{item.qtd}</p>
                            <ButtonMais onClick={() => handleIncrement(item.id)} ><div>+</div></ButtonMais>
                        </DivQtd>                           
                        <Preco>{item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Preco>
                        <RemoveButton onClick={() => removeItem(item)}>Remover do carrinho</RemoveButton>       
                    </Item>
                    
                )         
        })}
            </ItensDiv>
            <DivFinaliza>
                <p>Total: <span>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></p>
                <ButtonFinal onClick={props.voltarPraMain}>Continuar comprando</ButtonFinal>
                <ButtonFinal onClick={props.finalizarCompra}>Finalizar compra</ButtonFinal>
            </DivFinaliza>
        </ContainerCarrinho>
    )
}