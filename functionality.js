const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

let currentExpression = "";
let lastAnswer = "";

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") { 
      currentExpression = "";
      resultDisplay.textContent = "";
    } 
    else if (value === "del") {
      currentExpression = currentExpression.slice(0, -1);
    } 
    else if (value === "Enter") {
      try {
        let evalExpression = currentExpression
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/√(\d+)/g, "Math.sqrt($1)")
          .replace(/%/g, "/100");

        let result = eval(evalExpression);
        resultDisplay.textContent = result;
        lastAnswer = result;
      } catch {
        resultDisplay.textContent = "Error";
      }
    } 
    else if (value === "ans") {
      currentExpression += lastAnswer;
    } 
    else {
      currentExpression += value;
    }

    expressionDisplay.textContent = currentExpression;
  });
});