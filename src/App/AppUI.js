import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {TodosLoading, TodosError, EmptyTodos} from "../TodosLoading";
import {CancelCreateTodoButton, CreateTodoButton} from "../CreateTodoButton";
import {CreateFabric, Fabricated} from "../Fabrics";
import {TodoContext } from "../TodoContext";
import { Modal, ModalMobile } from "../Modal";
import { OpenModalButton } from "../Buttons";
import useWindowSize from "../TodoContext/useWindowsSize";

function AppUI(){
  const {
    loading, 
    error, 
    totalTodos, 
    searchedTodos, 
    completeTodo, 
    openModal,
    setOpenModal,
    deleteTodo} = React.useContext(TodoContext)

    const size = useWindowSize()
    return (
        <>
        {size.width >= 800 &&
      <CreateFabric>
        
        <CreateTodoButton></CreateTodoButton>

        
        
      </CreateFabric>}

      <Fabricated>
        
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      
      
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && totalTodos.lenght == 0) && <EmptyTodos />}

          {!loading && searchedTodos.map(todo => (
            <TodoItem key={todo.text} text = {todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>
        
      
      </Fabricated>
      {size.width < 800 && <OpenModalButton/>}

      {openModal && size.width >= 800 && (
          <Modal>
            ¡Nuevo ToDo Agregado!
          </Modal>
        )}

      {openModal && size.width < 800 && (
          <ModalMobile>
            <CreateFabric>
              <CreateTodoButton></CreateTodoButton>
              <CancelCreateTodoButton></CancelCreateTodoButton>
            </CreateFabric>
          </ModalMobile>
        )}
    </>
    )
    
  }

  export {AppUI}