import React from "react";
import './Buttons.css';
import { TodoContext } from "../TodoContext";

function OpenModalButton(){
    const {
        openModal,
        setOpenModal,
        newTodoValue,
        setTodoValue,
        addTodo
    } = React.useContext(TodoContext)
    return(
        
            <button className= {`Button-CreateTodo--mobile`} onClick={(event)=>{
                    setOpenModal(!openModal);
            }}>+</button>
    )
}

export {OpenModalButton};