import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";
import useWindowSize from "../TodoContext/useWindowsSize";

function CreateTodoButton(){
    const {
        openModal,
        setOpenModal,
        newTodoValue,
        setTodoValue,
        addTodo,
        deleteTodo
    } = React.useContext(TodoContext)

    const size = useWindowSize()


    return(
        <div className="ButtonContainer">
            <button className= {`Button ${newTodoValue&&"Button-CreateTodoButton"}`} onClick={(event)=>{
                if(newTodoValue){
                    setOpenModal(!openModal);
                    addTodo(newTodoValue);
                    size.width < 800 && setTodoValue("");
                    
                    setTimeout(() => {
                        setOpenModal(false);
                    }, 2000);

                    
                }
            }}>Agregar</button>
        </div>
    )
}

function CancelCreateTodoButton(){
    const {
        openModal,
        setOpenModal,
        newTodoValue,
        setTodoValue,
    } = React.useContext(TodoContext)
    return(
        <div className="ButtonContainer">
            <button className= {`Button Button-Cancel`} onClick={(event)=>{
                setTodoValue("");
                setOpenModal(false);
            }}>Cancelar</button>
        </div>
    )
}

export {CreateTodoButton, CancelCreateTodoButton};