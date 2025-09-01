let currentInput = "";

function updateResult() {
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerText = currentInput || "0";
  }
}

function appendNumber(number) {
  currentInput += number;
  updateResult();
}

function appendOperator(operator) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateResult();
}

function clearResult() {
  currentInput = "";
  updateResult();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = "Error";
  }
  updateResult();
}
