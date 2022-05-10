import React, { createContext, useContext, useState } from "react";
import { useStatus } from "./status-hooks";
import { useTodo } from "./todo-hooks";

const FilteredContext = createContext();

function FilteredTodoProvider({ children }) {
    const [status] = useStatus();
    const [todoList] = useTodo();

    const [filteredList, setFilteredList] = useState([]);

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
        <FilteredContext.Provider value={[filteredList, filterList]}>
            {children}
        </FilteredContext.Provider>
    );
}

export const useFilteredTodo = () => useContext(FilteredContext);
export default FilteredTodoProvider;
