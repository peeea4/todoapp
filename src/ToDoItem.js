function ToDoItem({ todoItem, toggleTask, removeTask}) {
    return (
        <div key={todoItem.id} className={todoItem.isComplete ? "task-complete todo-item" : "task-not-complete todo-item"}>
            <div>
                {
                    todoItem.task
                }
            </div>
            <div className="buttons">
                <div className="item-complete" onClick={() => toggleTask(todoItem.id)}>
                </div>
                <div className="item-delete" onClick={() => removeTask(todoItem.id)}>
                </div>
            </div>
        </div>

    )
}
export default ToDoItem