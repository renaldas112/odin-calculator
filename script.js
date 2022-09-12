/* eslint-disable func-names */
const prevResultContainer = document.querySelector(".result__container--prev");
const currentResultContainer = document.querySelector(
  ".result__container--current"
);

const buttonClearAll = document.getElementById("clear");
// const buttonAddMinusSign = document.getElementById("addMinusSign");
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

buttonClearAll.onclick = function () {
  prevResultContainer.innerText = "";
  currentResultContainer.innerText = "";
};

button1.onclick = function () {
  currentResultContainer.innerText += "1";
};

button2.onclick = function () {
  currentResultContainer.innerText += "2";
};

button3.onclick = function () {
  currentResultContainer.innerText += "3";
};

button4.onclick = function () {
  currentResultContainer.innerText += "4";
};

button5.onclick = function () {
  currentResultContainer.innerText += "5";
};

button6.onclick = function () {
  currentResultContainer.innerText += "6";
};

button7.onclick = function () {
  currentResultContainer.innerText += "7";
};

button8.onclick = function () {
  currentResultContainer.innerText += "8";
};

button9.onclick = function () {
  currentResultContainer.innerText += "9";
};

button0.onclick = function () {
  currentResultContainer.innerText += "0";
};

buttonDot.onclick = function () {
  currentResultContainer.innerText += ".";
};
