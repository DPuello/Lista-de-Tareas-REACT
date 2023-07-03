import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter(){
    
    const {
        totalTodos: total,
        completedTodos: completed,
        loading: loading
    } = React.useContext(TodoContext)

    if(loading) return(
    <h2 className="TodoCounter">Cargando...</h2>
    )
    return(
        
        <h2 className="TodoCounter">{total>0?`Sigue así, llevas ${completed} de ${total} tareas`:"¡Crea una nueva tarea!"}</h2>
    )
}

export {TodoCounter};