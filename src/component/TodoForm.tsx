import React, {Dispatch, SetStateAction, useState} from 'react'
import todoService from '../todoservice'
import todotype from '../todo'
import "../css/todoform.css"

interface PropTypes {
    setTodos: Dispatch<SetStateAction <todotype[]>>
}

const TodoForm: React.FC<PropTypes> = ({setTodos}) => {
    const [newtodotext, setNewtodotext] = useState<string>('')
    const handelAddtodo = () => {
        if (newtodotext.trim() !== '') {
            const newTodod = todoService.addTodo(newtodotext)
            setTodos((prevTodo) => [...prevTodo, newTodod])
            setNewtodotext('')
        }
    }

  return (
    <div className='inputform'>
        <input type="text" value={newtodotext} onChange={(e) => setNewtodotext(e.target.value)} autoFocus={true} placeholder='Add a Task'/>
        <button onClick={handelAddtodo}>Add todo</button>
    </div>
  )
}

export default TodoForm;
