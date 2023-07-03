import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="ListContainer">
            <ul className="List List-TodoList">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};