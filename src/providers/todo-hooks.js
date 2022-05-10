import React, { createContext, useState, useContext } from "react";

const todoContext = createContext([]);

function TodoProvider({ children }) {
    const [todoList, setTodoList] = useState([]);

    return (
        <todoContext.Provider value={[todoList, setTodoList]}>
            {children}
        </todoContext.Provider>
    );
}

export const useTodo = () => useContext(todoContext);
export default TodoProvider;
