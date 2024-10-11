import { FaClipboardList, FaPen } from "react-icons/fa"
import TodoList from "./component/todolist"
import "../src/css/App.css"

function App() {
  

  return (
    <div className="app">
      <div className="header">
        <div className="longside">
          <FaPen />
          <h1>What To Do?</h1>
          <FaClipboardList />
        </div>
      </div>
      <TodoList />
    </div>
  )
}

export default App
