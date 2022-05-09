import React, { useState } from "react";
import "./App.css";
import SelectionBar from "./components/SelectionBar";
import TaskBoard from "./components/TaskBoard";

function App() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([
        { name: "Pasear al perro", completed: false, id: 1 },
        { name: "Comprar harina", completed: true, id: 2 },
    ]);

    return (
        <div className="App">
            <header className="title">#todo</header>
            <SelectionBar />
            <TaskBoard
                todoList={todoList}
                setTodoList={setTodoList}
                input={input}
                setInput={setInput}
            />
        </div>
    );
}

export default App;
