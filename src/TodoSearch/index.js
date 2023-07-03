import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)
    
    return(
        <main className="TodoSearchContainer">
            <input className="Input Input-TodoSearch" placeholder="Buscar" value={searchValue} onChange = {
                (event) => {
                 setSearchValue(event.target.value);
                }
                 }></input>
            <span>🔍</span>
        </main>
        )
}

export {TodoSearch};