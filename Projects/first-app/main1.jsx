import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function FavouriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1 style={{ backgroundColor: color }}>
        My favourite color is {color}
      </h1>

      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <FavouriteColor />
);
