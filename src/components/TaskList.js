import React from "react";
import Task from "./Task";

function TaskList({ filteredList }) {
    return (
        <>
            <div className="task-list">
                {filteredList.map((todo) => (
                    <Task key={todo.id} todo={todo} />
                ))}
            </div>
        </>
    );
}

export default TaskList;
