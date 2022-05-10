import React, { createContext, useContext, useState } from "react";

export const statusContext = createContext();

function StatusProvider({ children }) {
    const [status, setStatus] = useState("");

    return (
        <statusContext.Provider value={[status, setStatus]}>
            {children}
        </statusContext.Provider>
    );
}

export const useStatus = () => useContext(statusContext);
export default StatusProvider;
