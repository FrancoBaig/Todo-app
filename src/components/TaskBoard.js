import React, { useEffect } from "react";
import Input from "./Input";
import TaskList from "./TaskList";

function TaskBoard({ todoList, setTodoList, input, setInput }) {
    return (
        <>
            <Input
                input={input}
                setInput={setInput}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <TaskList todoList={todoList} setTodoList={setTodoList} />
        </>
    );
}

export default TaskBoard;
