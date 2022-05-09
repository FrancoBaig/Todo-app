import React from "react";
import Task from "./Task";

function TaskList({ todoList, setTodoList }) {
    return (
        <div className="task-list">
            {todoList.map((todo) => (
                <Task key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TaskList;
