let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let del = document.querySelector("#del");
let btns = document.querySelectorAll(
  ".container button:not(#clear):not(#equal):not(#del)"
);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.innerText += btn.innerText;
  });
});

dec.addEventListener("click", () => {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});

equal.addEventListener("click", () => {
  try {
    display.innerText = eval(display.innerText).toString();
  } catch (error) {
    display.innerText = "Error";
  }
});

clear.addEventListener("click", () => {
  display.innerText = "";
});

del.addEventListener("click", () => {
  let currentDisplay = display.innerText;
  display.innerText = currentDisplay.slice(0, -1);
});
