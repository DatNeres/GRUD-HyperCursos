const modalInput = document.querySelector(".modal__add__form")
const Inputs = document.querySelectorAll(".modal__input")
const inputName = document.querySelector(".add-name");
const inputCpf = document.querySelector(".add-cpf");
const inputBirtday = document.querySelector(".add-birtday");
const inputCellphone = document.querySelector(".add-cellphone");
const inputEmail = document.querySelector(".add-email");
const inputAddress = document.querySelector(".add-address");
const inputNumber = document.querySelector(".add-number");
const inputComplement = document.querySelector(".add-complement");
const inputClass = document.querySelector(".add-class");

let classInput;

function onlyNumbers(e) {
  const keyCode = e.which || e.keyCode;
  if (keyCode < 48 || keyCode > 57 || keyCode === 32) {
    e.preventDefault();
    classInput.classList.add("shake");
    setTimeout(() => {
      classInput.classList.remove("shake");
    }, 100) 
  }
};

function onlyLetters(e) {
  const keyCode = e.which || e.keyCode;
  if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122) && keyCode !== 32) {
    e.preventDefault();
    classInput.classList.add("shake");
    setTimeout(() => {
    classInput.classList.remove("shake");
    }, 100) 
  }
};

let emptyInputStatus = true;

function emptyInput() {
  emptyInputStatus = true;
  for (let input of Inputs) {
    if (input.value === '') {
        input.style.border = "1px solid red";
        input.classList.add("shake");
        setTimeout(() => {
        input.classList.remove("shake");
        }, 100);
        emptyInputStatus = false;
    } else {
        input.style.border = "none";
    }
        if (inputCpf.value.length < 14) {
          inputCpf.style.border = "1px solid red";
          inputCpf.classList.add("shake");
          setTimeout(() => {
              inputCpf.classList.remove("shake");
          }, 100);
          emptyInputStatus = false;
        }
        if (inputBirtday.value.length < 10) {
          inputBirtday.style.border = "1px solid red";
          inputBirtday.classList.add("shake");
          setTimeout(() => {
              inputBirtday.classList.remove("shake");
          }, 100);
          emptyInputStatus = false;
        }
        if (inputCellphone.value.length < 14) {
          inputCellphone.style.border = "1px solid red";
          inputCellphone.classList.add("shake");
          setTimeout(() => {
              inputCellphone.classList.remove("shake");
          }, 100);
          emptyInputStatus = false;
        }
        if (!inputEmail.value.includes('.com') || !inputEmail.value.includes('@')) {
          inputEmail.style.border = "1px solid red";
          inputEmail.classList.add("shake");
          setTimeout(() => {
          inputEmail.classList.remove("shake");
          }, 100);
          emptyInputStatus = false;
        }
  }
}

inputName.addEventListener("keypress", (e) => {
  classInput = inputName
  inputName.style.border = "none"
  onlyLetters(e)
});

inputCpf.addEventListener("keypress", (e) => {
  classInput = inputCpf
  onlyNumbers(e)
  inputCpf.style.border = "none"
  if (inputCpf.value.length === 3 || inputCpf.value.length === 7) {
    inputCpf.value += ".";
  } else if (inputCpf.value.length === 11) {
    inputCpf.value += "-";
  }
});

inputBirtday.addEventListener("keypress", (e) => {
  classInput = inputBirtday
  onlyNumbers(e)
  inputBirtday.style.border = "none"
  if (inputBirtday.value.length === 2 || inputBirtday.value.length === 5) {
    inputBirtday.value += "/";
  } else if (inputCpf.value.length === 11) {
    inputCpf.value += "-";
  }
});

inputCellphone.addEventListener("keypress", (e) => {
  classInput = inputCellphone
  onlyNumbers(e)
  inputCellphone.style.border = "none"
  if (inputCellphone.value.length === 0) {   
    inputCellphone.value += "(";
  } else if (inputCellphone.value.length === 3) {
    inputCellphone.value += ")";
  } else if (inputCellphone.value.length === 4) {
    inputCellphone.value += " ";
  } else if (inputCellphone.value.length === 9) {
    inputCellphone.value += "-";
  }
});

inputEmail.addEventListener("keypress", () => {
  classInput = inputEmail
});