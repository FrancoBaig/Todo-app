import React, { useState, useLayoutEffect } from "react";
import "./App.css";
import SelectionBar from "./components/SelectionBar";
import TaskBoard from "./components/TaskBoard";
import { useTodo } from "./providers/todo-hooks";
import { useStatus } from "./providers/status-hooks";
import { useFilteredTodo } from "./providers/filtered-hooks";

function App() {
    const [todoList, setTodoList] = useTodo();
    const [status] = useStatus();
    const [filteredList, filterList] = useFilteredTodo();

    useLayoutEffect(() => {
        if (localStorage.getItem("todoList") === null) {
            localStorage.setItem("todoList", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todoList"));
            setTodoList(todoLocal);
        }
    }, []);

    useLayoutEffect(() => {
        saveLocalTodoList();
        filterList();
    }, [status, todoList]);

    const saveLocalTodoList = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    return (
        <div className="App">
            <header className="title">#todo</header>
            <SelectionBar />
            <TaskBoard filteredList={filteredList} status={status} />
            <footer className="footer"></footer>
        </div>
    );
}

export default App;
