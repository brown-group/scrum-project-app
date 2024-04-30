/* Feel free to use CSS or Bootstrap to style your HTML. Add functionality using JavaScript */

import { useState } from "react";
import "./Erik.scss";

export default function Erik() {
  const [title, setTitle] = useState("Erik");

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
