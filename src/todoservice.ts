import todotype from "./todo";

const local_storage_key = "todos"

const todoService = {
    //get to do
    getTodo: () : todotype[] => {
        const todostr = localStorage.getItem(local_storage_key)
        return todostr ? JSON.parse(todostr): []
    },

    //addin to todo
    addTodo: (text :string) : todotype => {
        const todos = todoService.getTodo()
        const newtodo: todotype = {id: todos.length + 1, text, completed:false}
        const updateTodo = [...todos, newtodo]
        localStorage.setItem(local_storage_key, JSON.stringify(updateTodo))
        return newtodo
    },
      // up date todo
    updateTodo: (todo :todotype) : todotype => {
        const todos = todoService.getTodo()
        const updateTodo = todos.map((t) => (t.id === todo.id? todo : t))
        localStorage.setItem(local_storage_key, JSON.stringify(updateTodo))
        return todo
    },

     // delete todo
     deleteTodo: (id :number) : void => {
        const todos = todoService.getTodo()
        const updateTodo = todos.filter((todo) => todo.id !== id)
        localStorage.setItem(local_storage_key, JSON.stringify(updateTodo))
        
    }

}

export default todoService;