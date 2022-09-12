// const disableButtonAfterClicked = () => {
//   const BUTTONS = document.querySelectorAll(".orange");

//   // eslint-disable-next-line no-restricted-syntax
//   for (const BUTTON of BUTTONS) {
//     BUTTON.disabled = true;
//   }
// };

const plus = document.getElementById("plus");

let plusActive = false;

const concat = () => {
  if (plusActive === true) {
    currentResultContainer.innerText =
      Number(prevResultContainer.innerText) +
      Number(currentResultContainer.innerText);
  }
};

plus.onclick = () => {
  prevResultContainer.innerText = currentResultContainer.innerText;
  currentResultContainer.innerText = "";
  plusActive = true;
};

const minus = document.getElementById("minus");

let minusActive = false;

const substract = () => {
  if (minusActive === true) {
    currentResultContainer.innerText =
      Number(prevResultContainer.innerText) -
      Number(currentResultContainer.innerText);
  }
};

minus.onclick = () => {
  prevResultContainer.innerText = currentResultContainer.innerText;
  currentResultContainer.innerText = "";
  minusActive = true;
};

const equal = document.getElementById("equals");

equal.onclick = () => {
  concat();
  substract();
};
