import React from "react";

function Input({ input, setInput, todoList, setTodoList }) {
    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const addTaskHandler = (e) => {
        let newTask = {
            name: input,
            completed: false,
            id: Math.random() * 1000,
        };
        setTodoList([...todoList, newTask]);
        setInput("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addTaskHandler();
    };
    return (
        <form className="task-form" onSubmit={submitHandler}>
            <input
                onChange={inputHandler}
                type="text"
                placeholder="add details"
                className="input"
                value={input}
            />
            <button
                onClick={addTaskHandler}
                type="button"
                className="input-btn"
            >
                Add
            </button>
        </form>
    );
}

export default Input;
