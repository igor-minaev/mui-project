import './App.css'
import {GoodsList} from "./components/GoodsList.tsx";
import {goods} from "./data/phones.ts";
import {type ChangeEvent, useState} from "react";
import {Search} from "./components/Search.tsx";
import {Header} from "./components/Header.tsx";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {cyan, lightGreen} from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {Basket} from "./components/Basket.tsx";

export type OrderType = {
    id: string
    name: string
    price: number
}

function App() {
    const [order, setOrder] = useState<OrderType[]>([])
    const [products, setProducts] = useState(goods)
    const [search, setSearch] = useState('')
    const [dark, setDark] = useState(false)
    const [isCartOpen,setIsCartOpen]=useState(false)

    const SearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            setProducts(goods)
            setSearch('')
            return
        }

        setSearch(e.currentTarget.value)
        setProducts(products.filter(g => g.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())))
    }

    const addToOrder = (oneOrder: OrderType) => {
        setOrder([...order, oneOrder])
    }

    const removeFromOrder = (goodsId: string) => {
        setOrder(order.filter(g => g.id !== goodsId))
    }

    const theme = createTheme({
        palette: {
            primary: cyan,
            secondary: lightGreen,
            mode: dark ? 'dark' : 'light'
        },
    })

    const changeTheme = () => setDark(!dark)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header changeTheme={changeTheme} handleCart={()=>setIsCartOpen(true)} orderLen={order.length}/>
            <Container maxWidth="md" sx={{mt: '15px'}}>
                <Search value={search} onChange={SearchHandler}/>
                <GoodsList goods={products} addToOrder={addToOrder}/>
            </Container>
            <Basket order={order} removeFromOrder={removeFromOrder} cartOpen={isCartOpen} closeCart={()=>setIsCartOpen(false)}/>
        </ThemeProvider>
    )
}

export default App
