import React, { useState } from 'react'
import todotype from '../todo'
import todoService from '../todoservice'
import { FaCheck, FaEdit } from 'react-icons/fa'
import {GiCancel} from 'react-icons/gi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import TodoForm from './TodoForm'
import "../css/todolist.css"

const TodoList = () => {
    const [todos, setTodos] = useState<todotype[]>(todoService.getTodo())
    const [editingtodoid, setEditingtodoid] = useState<number | null>(null)
    const [editedtodoText, setEditedtodoText] = useState<string>("")

 // function for handeling edite todo   
    const handleditstart = (id:number, text:string) => {
         setEditedtodoText(text)
         setEditingtodoid(id)
    }

    const handleditcancel = () => {
        setEditedtodoText("")
        setEditingtodoid(null)
   }

   const handleditsave = (id:number) => {
    if (editedtodoText.trim() !== '') {
        const updateTodo = todoService.updateTodo({
            id,
            text: editedtodoText,
            completed:false
        })

        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)))

        setEditingtodoid(null)
        setEditedtodoText("")
    }
}

// function for deletle the todo

const handldeletetodo = (id:number) => {
    todoService.deleteTodo(id)
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
}
    
  return (
    <div className='todocontainer'>
        <div>
            <TodoForm setTodos={setTodos}/>
        </div>
        {todos.map((todo) => (
            <div className='items' key={todo.id}>
                {editingtodoid === todo.id ? (
                    <div className='editedtext'>
                        <input type="text" value={editedtodoText} onChange={(e) => setEditedtodoText(e.target.value)} autoFocus= {true}/>
                        <button onClick={() => handleditsave(todo.id)}>
                        <FaCheck />
                        </button>
                        <button className='cancelbtn' onClick={() => handleditcancel()}>
                            <GiCancel />
                        </button>
                    </div>
                ): (
                    <div className='editbtn'>
                        <span>{todo.text}</span>
                        
                    </div>
                )}
                <div className='another'>
                <button onClick={() => handleditstart(todo.id, todo.text)}>
                            <FaEdit />
                        </button>

                <button className='deletebtn' onClick={() => handldeletetodo(todo.id)}>
                    <RiDeleteBin5Fill />
                </button>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default TodoList;
