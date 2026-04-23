import './App.css'
import {GoodsList} from "./components/GoodsList.tsx";
import {goods} from "./data/phones.ts";
import {type ChangeEvent, useState} from "react";
import {Search} from "./components/Search.tsx";
import {BasketList} from "./components/BasketList.tsx";

export type OrderType = {
    id: string
    name: string
    price: number
}

function App() {
    const [order, setOrder] = useState<OrderType[]>([])
    const [products, setProducts] = useState(goods)
    const [search, setSearch] = useState('')

    const SearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            setProducts(goods)
            setSearch('')
            return
        }

        setSearch(e.currentTarget.value)
        setProducts(products.filter(g => g.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())))
    }

    const addToOrder = (oneOrder: OrderType)=>{
        setOrder([...order,oneOrder])
    }

    const removeFromOrder = (goodsId: string) => {
        setOrder(order.filter(g => g.id !== goodsId))
    }

    return (
        <>
            <Search value={search} onChange={SearchHandler}/>
            <GoodsList goods={products} addToOrder={addToOrder}/>
            <BasketList order={order} removeFromOrder={removeFromOrder}/>
        </>
    )
}

export default App
