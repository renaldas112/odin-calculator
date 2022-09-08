const resultContainer = document.querySelector(".result__container");

const buttonClearAll = document.getElementById("clear");
const buttonAddMinusSign = document.getElementById("addMinusSign");
const button1 = document.getElementById("one");
const button2 = document.getElementById("two");
const button3 = document.getElementById("three");
const button4 = document.getElementById("four");
const button5 = document.getElementById("five");
const button6 = document.getElementById("six");
const button7 = document.getElementById("seven");
const button8 = document.getElementById("eight");
const button9 = document.getElementById("nine");
const button0 = document.getElementById("zero");
const buttonDot = document.getElementById("dot");

let inputNumber = "";

buttonClearAll.onclick = function () {
  resultContainer.innerHTML = "";
  inputNumber = "";
};

button1.onclick = function () {
  resultContainer.innerHTML += "1";
  inputNumber += "1";
};

button2.onclick = function () {
  resultContainer.innerHTML += "2";
  inputNumber += "2";
};

button3.onclick = function () {
  resultContainer.innerHTML += "3";
  inputNumber += "3";
};

button4.onclick = function () {
  resultContainer.innerHTML += "4";
  inputNumber += "4";
};

button5.onclick = function () {
  resultContainer.innerHTML += "5";
  inputNumber += "5";
};

button6.onclick = function () {
  resultContainer.innerHTML += "6";
  inputNumber += "6";
};

button7.onclick = function () {
  resultContainer.innerHTML += "7";
  inputNumber += "7";
};

button8.onclick = function () {
  resultContainer.innerHTML += "8";
  inputNumber += "8";
};

button9.onclick = function () {
  resultContainer.innerHTML += "9";
  inputNumber += "9";
};

button0.onclick = function () {
  resultContainer.innerHTML += "0";
  inputNumber += "0";
};

buttonDot.onclick = function () {
  resultContainer.innerHTML += ".";
};

const plus = document.getElementById("plus");

plus.onclick = function (inputNumber) {
    //ka darys + mygtukas
}
