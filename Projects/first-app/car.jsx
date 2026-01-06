import { create } from "lodash";

import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


function Car(){
    const myobj = {
        name:"Fiat",
        model:500,
        color:"white"
    };

    return(
        <>
        <p>My name is {myobj.name} and my model is {myobj.model} & color is {myobj.color}</p>
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <Car/>
)