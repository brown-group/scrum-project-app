/* Feel free to use CSS or Bootstrap to style your HTML. Add functionality using JavaScript */

import { useState } from "react";
import "./Husni.scss";

export default function Husni() {
  const [title, setTitle] = useState("Husni Hamdan");

  const myFunction = () => {
    alert("Hello");
  };

  return (
    <>
      <h1>{title}</h1>

      <button id="my-button" onClick={myFunction}>
        CSS button
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setTitle("Lorem ipsum");
        }}
      >
        Bootstrap button
      </button>
    </>
  );
}
