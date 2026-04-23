import type {OrderType} from "../App.tsx";

type BasketItemPropsType = {
    removeFromOrder: (goodsId: string) => void
} & OrderType

export const BasketItem = ({id, name, price, removeFromOrder}: BasketItemPropsType) => {
    return (
        <li>
            {name} {price}руб
            <button onClick={() => removeFromOrder(id)}>Удалить из корзины</button>
        </li>
    );
};

