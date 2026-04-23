import type {PhoneType} from "../data/phones.ts";
import {GoodsItem} from "./GoodsItem.tsx";
import type {OrderType} from "../App.tsx";

type GoodsListPropsType = {
    goods: PhoneType[]
    addToOrder : (oneOrder: OrderType)=>void

}
export const GoodsList = ({goods,addToOrder}: GoodsListPropsType) => {
    return (
        <div className='flex'>
            {goods.map(g => (
                <GoodsItem key={g.id} {...g} addToOrder={addToOrder}/>
            ))}
        </div>
    );
};

