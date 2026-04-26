import type {PhoneType} from "../data/phones.ts";
import type {OrderType} from "../App.tsx";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

type GoodsItemPropsType = {
    addToOrder: (oneOrder: OrderType) => void
} & PhoneType

export const GoodsItem = ({id, name, price, image, addToOrder}: GoodsItemPropsType) => {
    const onClickHandler = () => addToOrder({id, name, price})
    return (
        <Grid size={4}>
            <Card>
                <CardMedia component="img"
                           image={image}
                           alt={name}
                           sx={{
                               height: 300,
                               width: '100%',
                               objectFit: 'contain'
                           }}/>
                <CardContent>
                    <Typography variant='h6' component='h3'>{name}</Typography>
                    <Typography variant='body1'>Цена: {price} руб. </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onClickHandler}>Купить</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

