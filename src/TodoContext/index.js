import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const defaultTodos = [
    {text: 'Crear una nueva tarea', completed: false}
  ]

const TodoContext = React.createContext();

function TodoProvider({children}){

  const [searchValue, setSearchValue] = React.useState("");
  const {
    item: todos, saveItem: saveTodos, loading, error
  } = useLocalStorage('TODOS_V1', defaultTodos)
  
  const [openModal, setOpenModal] = React.useState(false);
  const [newTodoValue, setTodoValue] = React.useState("");
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => !!todo.completed).length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex((todo) => todo.text == text)
    newTodos[index].completed = !newTodos[index].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(index, 1)
    saveTodos(newTodos)
  }

    return(
        <TodoContext.Provider 
        value={{loading, 
        error, 
        completedTodos, 
        totalTodos, 
        searchValue, 
        setSearchValue, 
        searchedTodos, 
        addTodo, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        newTodoValue,
        setTodoValue,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}