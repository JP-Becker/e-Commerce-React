import './App.css';
import { Produtos } from './components/produtos/produtos';
import {Header} from "./components/Header/header";
import { Filtros } from './components/Filtros/filtros';
import { useEffect, useState } from 'react';
import { Carrinho } from './components/Carrinho/carrinho';
import { TelaFinal } from './components/TelaFinal/TelaFinal';
import lista from "./listaProdutos/lista.json"

function App() {
  const lista = [{
    tipo: "meteorito",
    id: "01",
    nome: "Fragmento Meteorito 6 NWA - L5",
    preco: 100.00,
    imagemUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTItYmB1A7n4xLEjDc8h6eIcYNx_rxeB2jOBSX9qq4T0B0HYQX-SfltM6x02AuFY_naSbgMWxVsBUP3SSa85F7MoFKiW9nGYO-gv5-8wT-_Gh6W9BKorUGSLYo&usqp=CAE",
    qtd: 0,    
},
    {
    tipo: "meteorito",
    id: "02",
    nome: "Fragmento Meteorito Campo Del Cielo",
    preco: 65.00,
    imagemUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTA55RSMNWitJUtOkjmEVJ5NfcuityPweyqN6-Wz_z5JFYOQuUY6PGgK8d42NplhHphD3-xXh6YUp4Q5nG7D16mcizGXn4ZU3wJ1IzEXpTpwhIe5nWQBcHF&usqp=CAE",
    qtd: 0,
},
    {
    tipo: "meteorito",
    id: "03",
    nome: "Meteorito De Ferro Sikhote Alin 1947",
    preco: 3165.00,
    imagemUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuxe5YqWkXFduxqpqX7uhCNVye9bztW1rFrYsoHuXMAqefpAhMXbU_N372Z7pCJlCT9I4l0YRHUwP1LkvjAHz_Dcvf9FqR_PVn3N5sJ9I&usqp=CAE",
    qtd: 0,
},
    {
    tipo: "miniatura",
    id: "04",
    nome: "Miniatura foguete Sls da Nasa",
    preco: 999.00,
    imagemUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkqhgXP-w0si7nr0o2DYpU62fvzXCegusCrQvZiEtAnhfhZprkUp-6Bxg2egXyzvjtdW5clzGFbFsBTK4dx1_v10LX8T3x2FE3Y0XcfjAEaCXI84eTOvE0UA&usqp=CAE",
    qtd: 0,
},
    {
    tipo: "miniatura",
    id: "05",
    nome: "Miniatura SpaceX CrewDragon",
    preco: 799.00,
    imagemUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyXn5K_I2s9DFnpIBylApFdV6AAOR2UFIsXfndymk5M8A5WRML0SO-MyKwB4Ndy6Rm6Q5tBn1-2nV6lQdc4LtoebVOUyg3L1KfzZjFbJgKEfDw85NCXtyX&usqp=CAE",
    qtd: 0,
},
    {
    tipo: "miniatura",
    id: "06",
    nome: "Miniatura SpaceX Starship",
    preco: 599.00,
    imagemUrl: "https://http2.mlstatic.com/D_NQ_NP_734421-MLB51186404981_082022-O.webp",
    qtd: 0,
},
    {
    tipo: "miniatura",
    id: "07",
    nome: "Miniatura Apollo 11 Foguete Saturno V",
    preco: 1299.00,
    imagemUrl: "https://http2.mlstatic.com/D_NQ_NP_870841-MLB42081381464_062020-O.webp",
    qtd: 0,
},
    {
    tipo: "réplica",
    id: "08",
    nome: "Répica de traje espacial Apollo 11",
    preco: 8999.00,
    imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Aa7SyeuxdMyKDzAUUWiwmq81wVMChplja-qEF9vvDpK1EJqnOG6ksLZb8cm1u2zR1os&usqp=CAU",
    qtd: 0,
},
    { 
    tipo: "réplica",
    id: "09",
    nome: "Réplica de traje espacial SpaceX",
    preco: 6999.00,
    imagemUrl: "http://atlas-content-cdn.pixelsquid.com/stock-images/spacex-spacesuit-astronaut-z0n1Wv3-600.jpg",
    qtd: 0,
},
    {
    tipo: "réplica",
    id: "10",
    nome: "Réplica de traje espacial moderno",
    preco: 4999.00,
    imagemUrl: "https://www.wonderworksweb.com/ftpfolder/Photo/pictures/image1078.jpg",
    qtd: 0,
},
    {
    tipo: "objeto",
    id: "11",
    nome: "Luvas usadas no pouso na lua",
    preco: 89999.00,
    imagemUrl: "https://i.inews.co.uk/content/uploads/2019/07/Buzz-Aldrin-Glove-Artifact-Apollo-11.jpg",
    qtd: 0,
},
    {
    tipo: "objeto",
    id: "12",
    nome: "Jaqueta usada por Buzz Aldrin",
    preco: 199999.00,
    imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2r0M860_vOoknJgTZQ-JeJZbk_m9V5AhbA&usqp=CAU",
    qtd: 0,
},
    {
    tipo: "comida",
    id: "13",
    nome: "Comida de astrounata(macarrão)",
    preco: 199.00,
    imagemUrl: "https://www.cheatsheet.com/wp-content/uploads/2018/02/Japans-food-maker-Nissin-food-products.jpg",
    qtd: 0,
},
    {
    tipo: "comida",
    id: "14",
    nome: "Embalagem para líquidos",
    preco: 99.00,
    imagemUrl: "https://images.fineartamerica.com/images-medium-large-5/astronaut-drinks-containers-nasa.jpg",
    qtd: 0,
},
    {
    tipo: "comida",
    id: "15",
    nome: "Barra de Cereal embalada à vácuo",
    preco: 129.00,
    imagemUrl: "https://www.diariodasaude.com.br/news/imgs/comida-espacial.jpg",
    qtd: 0,
},
] 

    const cartLocalStorage = JSON.parse(window.localStorage.getItem('cart'))

    const [buscaNome, setBuscaNome] = useState("") // estado para buscar por nome
    const [price, setPrice] = useState("") // estado para filtrar por preço
    const [ordena, setOrdena] = useState("") // estado para ordenar alfabeticamente
    const [type, setType] = useState("") // estado para filtrar por tipo
    const [itensNumero, setItensNumero] = useState(0) // estado que conta a quantidade de clicks no botao adiconar ao carrinho
    const [trocarTela, setTrocarTela] = useState(false) // estado para trocar entre a tela inicial e a do carrinho
    const [valorBotao, setValorBotao] = useState("") // estado para saber qual botao "adicionar ao carrinho" foi clicado
    const [cart, setCart] = useState(cartLocalStorage) // array com os produtos adicionados ao carrinho
    const [telaFinal, setTelaFinal] = useState(false) // estado para trocar entre a tela do carrinho e a tela final
    
    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
   

    function addCart () {
        let copyCart = [...cart]
        let findItemFromList = lista.find((item) => { // acha o item da lista que corresponde ao que foi clicado
            return item.id === valorBotao
        })
        let findItemFromCart = cart.find(itemFromCart => { // vê se já existe o item clicado no carrinho
            return itemFromCart.id === findItemFromList.id
        })

        if (findItemFromCart) { // se existir o item no carrinho aumenta a qtd e o preço
            findItemFromCart.qtd++ 
            findItemFromCart.preco += findItemFromList.preco
        } else { // senao adiciona o item
            findItemFromList.qtd = 1
            copyCart.push(findItemFromList) 
            setCart(copyCart)
        }
    }

    const irProCarrinho = () => {
        setTrocarTela(true)
    }

    const voltarPraMain = () => {
        setTrocarTela(false)
    }

    const finalizarCompra = () => {
        setTelaFinal(true)
    }

  return (
    <>
        {!trocarTela ? (
        <>
            <Header/>
            <div className='container'>
                <Filtros 
                    buscaNome={buscaNome} 
                    setBuscaNome={setBuscaNome} 
                    setPrice={setPrice}
                    setOrdena={setOrdena}
                    setType={setType}
                    itensNumero={itensNumero}
                    irProCarrinho={irProCarrinho}
                    setTrocarTela={setTrocarTela}
                />
                <Produtos 
                    itensNumero={itensNumero}
                    setItensNumero={setItensNumero}
                    lista={lista} 
                    buscaNome={buscaNome}
                    price={price}
                    ordena={ordena}
                    type={type}
                    setValorBotao={setValorBotao}
                    valorBotao={valorBotao}
                    cart={cart}
                    setCart={setCart}
                    addCart={addCart}
                />
                {/* <Footer/> */}
            </div>
      </>) : (
        <>
            {!telaFinal ? (
                <>
                <Header/>
                <Carrinho
                    lista={lista}
                    valorBotao={valorBotao}
                    cart={cart}
                    setCart={setCart}
                    voltarPraMain={voltarPraMain}
                    itensNumero={itensNumero}
                    setItensNumero={setItensNumero}
                    finalizarCompra={finalizarCompra}
                />
            </>
            ) : (
                <>
                <Header/>
                <TelaFinal/>
                </>
            )}
        </>
      )}
    </>
  );
}

export default App;
