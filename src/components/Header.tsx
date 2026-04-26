import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import {ThemeSwitch} from "./ThemeSwitch.tsx";

type HeaderPropsType = {
    changeTheme: () => void
    handleCart: () => void
}

export const Header = ({changeTheme, handleCart}: HeaderPropsType) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' component='span' sx={{flexGrow: 1}}>
                    MUI Shop
                </Typography>
                <ThemeSwitch onChange={changeTheme}/>
                <IconButton color='inherit' onClick={handleCart}>
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

