import type {OrderType} from "../App";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import ListItemText from "@mui/material/ListItemText";
import {Divider} from "@mui/material";
import {BasketItem} from "./BasketItem.tsx";

type BasketPropsType = {
    order: OrderType[]
    removeFromOrder: (goodsId: string) => void
    cartOpen: boolean
    closeCart: () => void
}

export const Basket = ({order, removeFromOrder, cartOpen, closeCart}: BasketPropsType) => {
    return (
        <Drawer anchor='right'
                open={cartOpen}
                onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary='Корзина'/>
                </ListItem>
                <Divider/>
                {!order.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                        {order.map(item => (
                            <BasketItem key={item.name} {...item} removeFromOrder={removeFromOrder}/>
                        ))}
                        <Divider/>
                    </>
                )}
            </List>
        </Drawer>
    );
};

