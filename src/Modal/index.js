import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"
import { TodoContext } from "../TodoContext";

function Modal({children}){
    const {newTodoValue, setTodoValue} = React.useContext(TodoContext);
    
    setTimeout(() => {
        setTodoValue("");
    }, 2000);
    
    

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="Pop-up">
                {children}
                <br></br>
                <p>
                    {newTodoValue}
                </p>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

function ModalMobile({children}){
    //const {newTodoValue, setTodoValue} = React.useContext(TodoContext);

    
    

    return ReactDOM.createPortal(
        <div className="ModalBackground--mobile"> 
                {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal, ModalMobile}