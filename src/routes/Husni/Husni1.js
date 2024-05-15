// let header = document.querySelector("header");
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("shadow", window.scrollY > 0);
// });

// menu.onclick = () => {
//   navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
window.addEventListener('load', function() {
  let x = document.getElementById('loader');
  x.style.display = 'none';
});

// document.getElementById("test").addEventListener("click", function(){
//     console.log("test")
// })







// console.log(123)
// let menu = document.querySelector("#menu-icon");
// console.log(menu)




// export default function Test () {
//     console.log(123)
// }

// export default function script() {
//     // Add your JavaScript here
  
//     // Example: Change the text of an HTML element
//     const test = document.getElementById("test");
  
//       // onclick works
//     test.onclick = () => {
//       test.classList.add("clicked");
//     };
//   }