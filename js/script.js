const check = document.getElementById("check");
const input = document.getElementById("input");
const secondNum = document.getElementById("second-num");
const firstNum = document.getElementById("first-num");
const sign = document.getElementById("sign");
let signOperator = [
  {
    sign: "+",
    method: function (a, b) {
      return a + b;
    }
  },
  {
    sign: "-",
    method: function (a, b) {
      return a - b;
    }
  },
  {
    sign: "*",
    method: function (a, b) {
      return a * b;
    }
  },
];

let first = Math.floor(Math.random() * 21);
let second = Math.floor(Math.random() * 21);
let selectOperator = Math.floor(Math.random() * signOperator.length);

let sum = signOperator[selectOperator].method(first,second)
firstNum.innerHTML = first;
secondNum.innerHTML = second;
sign.innerHTML = signOperator[selectOperator].sign;

console.log(sum);

check.addEventListener("click", (event) => {
  let inputNum = parseInt(input.value);

  if (inputNum === sum) {
    alert("Correct");
    window.location.reload()
  } else {
    alert("Incorrect");
    window.location.reload()
  }
});
