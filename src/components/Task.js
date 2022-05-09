import React from "react";

function Task({ todo }) {
    return (
        <>
            <div className="task">
                <input type="checkbox" name="task-check" className="checkbox" />
                <label htmlFor="task-check" className="task-label">
                    {todo.name}
                </label>
                <button className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </>
    );
}

export default Task;
