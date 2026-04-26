import type {ChangeEvent} from "react";
import TextField from "@mui/material/TextField";

type SearchPropsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Search = ({value, onChange}: SearchPropsType) => {
    return (
        <TextField fullWidth sx={{mb:'15px'}} label='Search' variant={"standard"} type="search" value={value} onChange={onChange}/>
    );
};

