console.log("hey");

const screen = document.getElementById("screen");
screen.value = 0;

function inputNumbers(x) {
  if (screen.value === "0") {
    screen.value = x;
  } else {
    screen.value += x;
  }
}

function inputOperators(x) {
  var lastchar =screen.value[screen.value.length - 1];
  if (
    lastchar == "+" ||
    lastchar == "/" ||
    lastchar == "-" ||
    lastchar == "*" ||
    lastchar == "%"
  ) {
    backSpace();
    inputNumbers(x);
  } else {
    inputNumbers(x);
  }
}

function backSpace() {
  if (screen.value == 0) {
    return;
  } else if (screen.value.length === 1) {
    screen.value = "0";
  } else {
    screen.value = screen.value.slice(0, -1);
  }
}

function clearScreen() {
  screen.value = 0;
}

function invertSign() {
  screen.value = screen.value.startsWith("-")
    ? screen.value.substring(1)
    : "-" + screen.value;
}

function evaluateExp() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "";
    screen.placeholder = "error";
  }
}
