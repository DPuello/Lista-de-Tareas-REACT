import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return(
        <div className={`TodoItem-loading`}>
            
            <p className={`TodoItemp-p loading-p`}>
                🛠️
            </p>
            
        </div>
    )
}

function TodosError(){
    return(
        <h6>Error 404</h6>
    )
}

function EmptyTodos(){
    return(
        <h6>Crea un nuevo todo!</h6>
    )
}

export {TodosLoading, TodosError, EmptyTodos};