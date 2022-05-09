import React, { useEffect } from "react";
import Input from "./Input";
import TaskList from "./TaskList";
import DeleteButton from "./DeleteButton";

function TaskBoard({
    todoList,
    setTodoList,
    input,
    setInput,
    filteredList,
    status,
}) {
    return (
        <>
            <Input
                input={input}
                setInput={setInput}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <TaskList
                todoList={todoList}
                setTodoList={setTodoList}
                filteredList={filteredList}
                status={status}
            />
            {status === "Completed" && filteredList.length > 0 && (
                <DeleteButton todoList={todoList} setTodoList={setTodoList} />
            )}
        </>
    );
}

export default TaskBoard;
