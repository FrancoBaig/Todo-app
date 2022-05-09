import React from "react";

function Task() {
    return (
        <>
            <div className="task">
                <input type="checkbox" name="task-check" className="checkbox" />
                <label for="task-check" className="task-label">
                    Tarea 1
                </label>
                <button className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </>
    );
}

export default Task;
