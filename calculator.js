let display = document.getElementById("display");
function calc(event) {
  let value = event.target.value;
  let lastchar = display.value.slice(-1);
  if (
    ["+", "-", "/", "*","%","."].includes(lastchar) &&
    ["+", "-", "/", "*","%","."].includes(value)
  ) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}
function my_eval() {
  try {
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
function del() {
  display.value = display.value.slice(0, -1);
}
function allClear() {
  display.value = "";
}