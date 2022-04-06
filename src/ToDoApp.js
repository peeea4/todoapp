import { useState } from "react"
import ToDoItem from "./ToDoItem.js"
import ToDoForm from "./ToDoForm.js"
import "./ToDoApp.scss"

function TodoApp() {
    const [todos, setTodos] = useState([ ])
    const [status, setStatus] = useState("All");

    const addTask = (userInput) => {
        if(userInput) {
            const newTask = {
            id: Math.random().toString(36).substring(2,9),
            task: userInput,
            isComplete: false,
            }
            setTodos([...todos, newTask])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter( (todo) => todo.id !== id )])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) => 
                todo.id === id ? {...todo, isComplete: !todo.isComplete } : {...todo}
            )
            ])
    }

    return (
    <div className="todoApp">
        <div className="tabs">
            <div className="tab" onClick={() => {setStatus("All")}}>All</div>
            <div className="tab" onClick={() => {setStatus("Completed")}}>Completed</div>
            <div className="tab" onClick={() => {setStatus("In progress")}}>In progress</div>
        </div>
        <header>
            <h1>Welcome!</h1>
        </header>
        <ToDoForm addTask={addTask}/>
        {
            todos.map( (todoItem) => {
                if (status == "All") {
                    return (
                        <ToDoItem 
                            todoItem = {todoItem}
                            key = {todoItem.id}
                            toggleTask = {handleToggle}
                            removeTask = {removeTask}
                        />
                    )
                } else if (status == "Completed" && todoItem.isComplete){
                    return (
                        <ToDoItem 
                            todoItem = {todoItem}
                            key = {todoItem.id}
                            toggleTask = {handleToggle}
                            removeTask = {removeTask}
                        />
                    )
                } else if (status == "In progress" && !todoItem.isComplete){
                    return (
                        <ToDoItem 
                            todoItem = {todoItem}
                            key = {todoItem.id}
                            toggleTask = {handleToggle}
                            removeTask = {removeTask}
                        />
                    )
                }
            })
        }
    </div>
    );
}
export default TodoApp
