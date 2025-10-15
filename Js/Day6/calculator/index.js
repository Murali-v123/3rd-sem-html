const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let displayInput = "";

buttons.forEach((btn) => {
  const res = btn.textContent;
  console.log(typeof res);
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clear")) {
      console.log("user pressed clear button");
      display.textContent = "0";
      displayInput = "";
    } else if (btn.classList.contains("delete")) {
      displayInput = String(displayInput).slice(0, -1);
      display.textContent = displayInput;
    } else if (btn.classList.contains("equals")) {
      try {
        displayInput = eval(displayInput.replace("%", "/100"));
        display.textContent = displayInput;
      } catch (error) {
        console.log("Error occurred");
        display.textContent = "Error";
        displayInput = "";
      }
    } else {
      displayInput += res;
      display.textContent = displayInput;
    }
  });
});
