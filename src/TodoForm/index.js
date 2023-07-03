import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {addTodo, setOpenModal, newTodoValue, setTodoValue} = React.useContext(TodoContext);
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(true);
    }
    const onChange = (event) => {
        setTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <textarea className="Input Input--NewWork" placeholder="Escribe aquí tu nueva tarea" value={newTodoValue} onChange={onChange}></textarea>
        </form>
    )
}

export {TodoForm};