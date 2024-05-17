//* Function to fetch a color palette from the colormind.io API
//? colormind.io returns 5 rgb colors in an array.
// export function getColorPalette() {
//   var url = "http://colormind.io/api/";
//   var data = {
//     model: "ui",
//   };

//   var http = new XMLHttpRequest();

//   return new Promise((resolve) => {
//     http.onreadystatechange = function () {
//       if (http.readyState === 4 && http.status === 200) {
//         var palette = JSON.parse(http.responseText).result;
//         resolve(palette);
//       }
//     };

//     http.open("POST", url, true);
//     http.send(JSON.stringify(data));
//   });
// }

import axios from 'axios';

export function getColorPalette() {
    const url = "https://random-flat-colors.vercel.app/api/random?count=5";

    return axios.get(url)
        .then(response => {
            if (response.status === 200) {
                return response.data.colors; // Return only the colors array
            } else {
                throw new Error(`Error fetching color palette: ${response.statusText}`);
            }
        })
        .catch(error => {
            console.error("There was an error!", error);
            throw error;
        });
}



