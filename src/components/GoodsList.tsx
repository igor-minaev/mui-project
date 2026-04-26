import type {PhoneType} from "../data/phones.ts";
import {GoodsItem} from "./GoodsItem.tsx";
import type {OrderType} from "../App.tsx";
import Grid from "@mui/material/Grid";

type GoodsListPropsType = {
    goods: PhoneType[]
    addToOrder: (oneOrder: OrderType) => void

}
export const GoodsList = ({goods, addToOrder}: GoodsListPropsType) => {
    return (
        <Grid container spacing={2}>
            {goods.map(g => (
                <GoodsItem key={g.id} {...g} addToOrder={addToOrder}/>
            ))}
        </Grid>
    );
};

