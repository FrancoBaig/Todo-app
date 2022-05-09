import React from "react";

function Input() {
    return (
        <form className="task-form">
            <input type="text" placeholder="add details" className="input" />
            <button type="button" className="input-btn">
                Add
            </button>
        </form>
    );
}

export default Input;
