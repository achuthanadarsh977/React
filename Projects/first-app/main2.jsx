
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


// function FavouriteColor(){
//     const [color , setColor] = useState("pink")

//     return(
//         <h1 style = {{backgroundColor:color}}>My favourite color is {color}</h1>
//     )
// }


function Car(){
    const [brand , setBrand] = useState("Ford")
    const [model , setModel] = useState("Mustang")
    const [year , setYear] = useState("2023")
    const [color , setColor] = useState("red")

    return(

        <>
        <body bgcolor = {{color}}>
        <h1 style={{backgroundcolor:color}}><center>{brand}</center></h1>
        <h2>This {model} was invented in the year {year}</h2>
        </body>
        </>
    )
}


createRoot(document.getElementById("root")).render(
  <Car />
);
