import React from "react";
import Selection from "./Selection";

function SelectionBar() {
    return (
        <>
            <div className="section-container">
                <Selection name={"All"} />
                <Selection name={"Active"} />
                <Selection name={"Completed"} />
            </div>
            <div className="container-separator"></div>
        </>
    );
}

export default SelectionBar;
