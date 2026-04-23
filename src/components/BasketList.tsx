import type {OrderType} from "../App.tsx";
import {BasketItem} from "./BasketItem.tsx";

type BasketListPropsType = {
    order: OrderType[]
    removeFromOrder: (goodsId: string) => void
}
export const BasketList = ({order, removeFromOrder}: BasketListPropsType) => {
    return (
        <ul>
            <li>Корзина</li>
            {order.length
                ? order.map(g => (
                    <BasketItem key={g.id} removeFromOrder={removeFromOrder} {...g}/>
                ))
                : <li>Товаров нет</li>}
            {order.length
                ? <li>Общая стоимость:{' '}
                    {order.reduce((acc, el) => acc + el.price, 0)}
                </li>
                : ''}

        </ul>
    );
};

