import React from "react";
import './TodoItem.css';
import check from './check.svg';

function TodoItem(props){
    return(
        <li className={`TodoItem ${props.completed && 'TodoItem--active'}`}>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={()=>{props.onComplete()}}>
                <div className="liIcon check">
                <svg viewBox="0 0 170 170">
                    <path
                        d="m32.794 161.91c-3.325-0.48-6.217-1.15-6.428-1.49s-1.189-1.91-2.173-3.48c-2.766-4.41-4.696-9.18-7.803-19.28-5.537-18-6.615-22.68-5.874-25.52 1.145-4.38 11.067-10.56 17.246-10.75 4.986-0.15 5.566 0.28 8.466 6.27 1.712 3.53 4.223 9.16 5.579 12.5s3.341 6.07 4.411 6.07c1.069 0 5.099-4.98 8.955-11.07s7.617-11.76 8.359-12.59c0.742-0.84 2.177-3.087 3.188-5.002 4.337-8.211 39.47-56.403 49.93-68.482 2.38-2.75 4.33-5.475 4.33-6.057 0-0.581 3.38-3.243 7.5-5.915 5.64-3.651 9.63-5.061 16.08-5.671 11.93-1.128 13.05-0.046 8.03 7.726-2.26 3.49-5.32 7.632-6.81 9.203s-5.91 7.036-9.83 12.143c-3.91 5.107-7.81 9.928-8.68 10.714-0.86 0.786-3.07 3.679-4.93 6.429-1.85 2.75-3.72 5.321-4.15 5.714-3.73 3.407-43.814 59.198-47.205 65.718-1.023 1.96-2.245 3.89-2.717 4.28s-4.581 6.32-9.131 13.17c-4.551 6.85-8.966 12.88-9.812 13.4-3.1 1.92-10.641 2.82-16.531 1.97z" />
                </svg>
                </div>
            </span>
            <p className={`TodoItemp-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <div onClick={()=>{props.onDelete()}} className="Icon Icon-delete">
                <span className="liIcon delete">
                    <svg width="16" height="16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
            </div>
        </li>
    )
}

export {TodoItem};