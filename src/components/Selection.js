import React from "react";
import { useStatus } from "../hooks/status-hooks";

function Selection({ name }) {
    const [status, setStatus] = useStatus();

    const setStatusHandler = () => {
        setStatus(name);
    };
    return (
        <button
            className={`section-btn ${name === status ? "active" : ""}`}
            onClick={setStatusHandler}
        >
            {name}
        </button>
    );
}

export default Selection;
