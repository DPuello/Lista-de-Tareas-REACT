import React from "react";
import './Fabrics.css';
import studying from './img/studying.png'
import { TodoForm } from "./TodoForm";

function CreateFabric(props){
    return(
        <section className="Fabric Fabric--CreateFabric">
            <h3 className="title title--nuevaTarea">Ingresa tu nueva tarea</h3>
            <TodoForm>
            
            </TodoForm>
            <div>
                {props.children}
            </div>
            <img src={studying}/>
        </section>
    )
}

function Fabricated(props){
    return(
        <section className="Fabric Fabric--Fabricated">
            <h1 className="title mainText">Tus tareas</h1>
            {props.children}
        </section>
    )
}

export {CreateFabric, Fabricated};