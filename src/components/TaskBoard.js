import React from "react";
import Input from "./Input";
import TaskList from "./TaskList";
import DeleteButton from "./DeleteButton";
import InputProvider from "../providers/input-hooks";

function TaskBoard({ filteredList, status }) {
    return (
        <>
            <InputProvider>
                <Input />
            </InputProvider>
            <TaskList filteredList={filteredList} />
            {status === "Completed" && filteredList.length > 0 && (
                <DeleteButton />
            )}
        </>
    );
}

export default TaskBoard;
