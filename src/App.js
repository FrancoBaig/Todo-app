import React, { useState, useLayoutEffect } from "react";
import "./App.css";
import SelectionBar from "./components/SelectionBar";
import TaskBoard from "./components/TaskBoard";
import { useTodo } from "./hooks/todo-hooks";
import { useStatus } from "./hooks/status-hooks";

function App() {
    const [todoList, setTodoList] = useTodo();
    const [status] = useStatus();
    const [filteredList, setFilteredList] = useState(todoList);

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
        console.log("activo");
    }, [status, todoList]);

    const saveLocalTodoList = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    const filterList = () => {
        switch (status) {
            case "Completed":
                setFilteredList(todoList.filter((todo) => todo.completed));
                break;
            case "Active":
                setFilteredList(todoList.filter((todo) => !todo.completed));
                break;
            default:
                setFilteredList(todoList);
        }
    };

    return (
        <div className="App">
            <header className="title">#todo</header>
            <SelectionBar />
            <TaskBoard filteredList={filteredList} status={status} />
        </div>
    );
}

export default App;
