import React from "react";
import Selection from "./Selection";

const selectionArray = ["All", "Active", "Completed"];

function SelectionBar({ status, setStatus }) {
    return (
        <>
            <div className="section-container">
                {selectionArray.map((section) => (
                    <Selection
                        key={section}
                        name={section}
                        status={status}
                        setStatus={setStatus}
                    />
                ))}
            </div>
            <div className="container-separator"></div>
        </>
    );
}

export default SelectionBar;
