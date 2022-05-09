import React from "react";
import Task from "./Task";

function TaskList({ todoList, setTodoList, filteredList, status }) {
    return (
        <>
            <div className="task-list">
                {filteredList.map((todo) => (
                    <Task
                        key={todo.id}
                        todo={todo}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        status={status}
                    />
                ))}
            </div>
        </>
    );
}

export default TaskList;
