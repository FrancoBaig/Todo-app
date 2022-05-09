import React from "react";

function Task({ todo, todoList, setTodoList }) {
    const deleteHandler = () => {
        setTodoList(todoList.filter((item) => item.id !== todo.id));
    };
    return (
        <>
            <div className="task">
                <input type="checkbox" name="task-check" className="checkbox" />
                <label htmlFor="task-check" className="task-label">
                    {todo.name}
                </label>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </>
    );
}

export default Task;
