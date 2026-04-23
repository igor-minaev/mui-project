import type {ChangeEvent} from "react";

type SearchPropsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Search = ({value, onChange}: SearchPropsType) => {
    return (
        <input type="search" value={value} onChange={onChange}/>
    );
};

