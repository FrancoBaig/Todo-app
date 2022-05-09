import React from "react";

function Selection({ name, status, setStatus }) {
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
