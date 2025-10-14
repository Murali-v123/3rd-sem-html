const calculate = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const opeartor = document.getElementById("operator").value;
  const result = document.getElementById("res");
  console.log(num1, num2, opeartor);
  let res;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid Numbers");
    result.innerText = "Enter a valid Numbers";
    result.style.color = "red";
  } else {
    switch (opeartor) {
      case "+": {
        res = num1 + num2;
        break;
      }
      case "-": {
        res = num1 - num2;
        break;
      }
      case "*": {
        res = num1 * num2;
        break;
      }
      case "/": {
        res = num1 / num2;
        break;
      }
      case "%": {
        res = num1 % num2;
        break;
      }
      default: {
        res = "Invalid Operator";
      }
    }
    console.log(res);
    result.style.color = "black";
    result.innerText = `Result is : ${res}`;
    result.style.fontSize = "2rem";
  }
};
