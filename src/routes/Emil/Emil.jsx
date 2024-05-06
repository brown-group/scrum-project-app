/* Feel free to use CSS or Bootstrap to style your HTML. Add functionality using JavaScript */

import { useState } from "react";
import "./Emil.scss";

// function getPalette() {
//   var url = "http://colormind.io/api/";
//   var data = {
//     model : "default",
//     input : [[44,43,44],[90,83,82],"N","N","N"]
//   }
  
//   var http = new XMLHttpRequest();
  
//   http.onreadystatechange = function() {
//     if(http.readyState == 4 && http.status == 200) {
//       var palette = JSON.parse(http.responseText).result;
//     }
//   }
  
//   http.open("POST", url, true);
//   http.send(JSON.stringify(data));
// }

export default function Emil() {
  const [title, setTitle] = useState("Emil");

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
