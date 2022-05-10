import React, { createContext, useContext, useState } from "react";

const InputContext = createContext();

function InputProvider({ children }) {
    const [input, setInput] = useState("");

    return (
        <InputContext.Provider value={[input, setInput]}>
            {children}
        </InputContext.Provider>
    );
}

export const useInput = () => useContext(InputContext);
export default InputProvider;
