import React from "react";
import { useTodo } from "../providers/todo-hooks";
import { useStatus } from "../providers/status-hooks";

function Task({ todo }) {
    const [todoList, setTodoList] = useTodo();
    const [status] = useStatus();

    const deleteHandler = () => {
        setTodoList(todoList.filter((item) => item.id !== todo.id));
    };

    const completeHandler = () => {
        setTodoList(
            todoList.map((elem) => {
                if (elem.id === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return elem;
            })
        );
    };
    return (
        <>
            <div className="task">
                <input
                    type="checkbox"
                    name="task-check"
                    className="checkbox"
                    checked={todo.completed}
                    onChange={completeHandler}
                />
                <label
                    htmlFor="task-check"
                    className={`task-label ${
                        todo.completed ? "completed" : ""
                    }`}
                >
                    {todo.name}
                </label>
                <button
                    className={`trash-btn ${
                        status === "Completed" ? "visible" : ""
                    }`}
                    onClick={deleteHandler}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </>
    );
}

export default Task;
