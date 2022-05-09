import React, { useState, useEffect } from "react";
import "./App.css";
import SelectionBar from "./components/SelectionBar";
import TaskBoard from "./components/TaskBoard";

function App() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredList, setFilteredList] = useState(todoList);

    useEffect(() => {
        if (localStorage.getItem("todoList") === null) {
            localStorage.setItem("todoList", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todoList"));
            setTodoList(todoLocal);
        }
    }, []);

    useEffect(() => {
        filterList();
        saveLocalTodoList();
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
            <SelectionBar status={status} setStatus={setStatus} />
            <TaskBoard
                todoList={todoList}
                setTodoList={setTodoList}
                input={input}
                setInput={setInput}
                filteredList={filteredList}
                status={status}
            />
        </div>
    );
}

export default App;
