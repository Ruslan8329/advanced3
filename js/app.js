/////////////////////////////////////////////1//////////////////////////////////////////

let input = document.querySelector(".input");
let filtered = "";

input.addEventListener("input", (e) => {
  if (!isNaN(Number(e.data))) {
    console.log("Введите строку");
    input.value = filtered;
    return;
  }
  filtered += e.data;
});

/////////////////////////////////////////////2//////////////////////////////////////

let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let modalWindow = document.querySelector(".modal-window");

openBtn.addEventListener("click", () => {
  modalWindow.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalWindow.style.display = "none";
});

///////////////////////////////////////////////3/////////////////////////////////////

// let ball = document.querySelector(".ball");
// window.addEventListener("keypress", (e) => {
//   console.log(e.code);
// });

// let footballField = document.querySelector(".football-field");

let ball = document.querySelector(".ball");
document.body.onclick = (e) => {
  ball.style.top = e.clientY + "px";
  ball.style.left = e.clientX + "px";
};
