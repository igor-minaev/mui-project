import type {OrderType} from "../App.tsx";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Close from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

type BasketItemPropsType = {
    removeFromOrder: (goodsId: string) => void
} & OrderType

export const BasketItem = ({id, name, price, removeFromOrder}: BasketItemPropsType) => {
    return (
        <ListItem>
            <Typography variant="body1">
                {name} {price}руб
            </Typography>
            <IconButton onClick={() => removeFromOrder(id)}>
                <Close/>
            </IconButton>
        </ListItem>
    );
};

