import type {PhoneType} from "../data/phones.ts";
import type {OrderType} from "../App.tsx";

type GoodsItemPropsType = {
    addToOrder: (oneOrder: OrderType) => void
} & PhoneType

export const GoodsItem = ({id, name, price, image, addToOrder}: GoodsItemPropsType) => {
    const onClickHandler = () => addToOrder({id, name, price})
    return (
        <div>
            <img src={image} alt={name}/>
            <div>
                <h5>{name}</h5>
                <p>Цена: {price} руб. </p>
                <button onClick={onClickHandler}>Купить</button>
            </div>
        </div>
    );
};

