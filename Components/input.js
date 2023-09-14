const containerForm = document.querySelector('.main')
const modalAddBlur = document.querySelector(".modal--blur");
const modalAdd = document.querySelector(".modal__add");
const modalH1 = document.querySelector(".modal__add__title");
const modalButtonAdd = document.querySelector(".menu__buttons--add");
const modalButtonClose = document.querySelector(".modal__button__close");
const inputImg = document.querySelector(".modal__add__picture__input");
const formAddStudent = document.querySelector('.modal__add__form')
const pictureDefault = document.querySelector(".modal__add__picture__default");
const modalAddBlurButtonSave = document.querySelector(".modal__add__button--save");
const modalAddBlurButtonUpdate = document.querySelector(".modal__add__button--update");
const barMobilemodalButtonAdd = document.querySelector("#bar__mobile__button__add");

function submitForm() {
  if (!emptyInputStatus) {
    modalAddBlurButtonSave.style.cursor = "not-allowed";
  } else {
    const name = formAddStudent.name.value;
    const cpf = formAddStudent.cpf.value;
    const birtday = formAddStudent.birtday.value;
    const cellphone = formAddStudent.cellphone.value;
    const email = formAddStudent.email.value;

    const createDivContainerStudent = document.createElement("div");
    createDivContainerStudent.setAttribute("class", "main__content");
    
    const createDivImgProfile = document.createElement("img");
    createDivImgProfile.setAttribute("class", "main__picture__studant");
    createDivImgProfile.src = url;

    const createTr = document.createElement("table");
    const nameTr = document.createElement("tr");
    const nameTd = document.createElement("td");
    const cpfTr = document.createElement("tr");
    const cpfTd = document.createElement("td");
    const birthdayTr = document.createElement("tr");
    const birthdayTd = document.createElement("td");
    const cellphoneTr = document.createElement("tr");
    const cellphoneTd = document.createElement("td");
    const emailTr = document.createElement("tr");
    const emailTd = document.createElement("td");

    nameTd.textContent = name;
    if (nameTd.textContent.split(" ").length > 3) {
      let nameParts = nameTd.textContent.split(" ");
      let abbrName =
        nameParts[0] + " " + nameParts[1] + " " + nameParts[2] + " ";
      for (let i = 3; i < nameParts.length; i++) {
        abbrName += nameParts[i].charAt(0) + ". ";
      }
      nameTd.textContent = abbrName.trim();
    }

    cpfTd.textContent = cpf;
    birthdayTd.textContent = birtday;
    cellphoneTd.textContent = cellphone;
    emailTd.textContent = email;

    createTr.appendChild(nameTr);
    nameTr.appendChild(nameTd);
    createTr.appendChild(cpfTr);
    cpfTr.appendChild(cpfTd);
    createTr.appendChild(birthdayTr);
    birthdayTr.appendChild(birthdayTd);
    createTr.appendChild(cellphoneTr);
    cellphoneTr.appendChild(cellphoneTd);
    createTr.appendChild(emailTr);
    emailTr.appendChild(emailTd);

    containerForm.appendChild(createDivContainerStudent);
    createDivContainerStudent.appendChild(createTr);
    createDivContainerStudent.appendChild(createDivImgProfile);

    modalAddBlur.style.display = "none";

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
}

inputImg.addEventListener("change", function (e) {
  if (e.target.files.length > 0) {
    url = URL.createObjectURL(e.target.files[0]);
    pictureDefault.src = url;
  } else {
    pictureDefault.src = "images/logos/profile.png";
  }
});

modalAddBlurButtonSave.addEventListener("click", function (e) {
  emptyInput();
  submitForm();
});

function resetForm() {
  inputName.value = "";
  inputCpf.value = "";
  inputBirtday.value = "";
  inputCellphone.value = "";
  inputEmail.value = "";
}

modalButtonAdd.addEventListener("click", () => {
  resetForm();
  modalAddBlur.style.display = "block";
  modalH1.textContent = "Cadastrar Novo Aluno";
});

barMobilemodalButtonAdd.addEventListener("click", () => {
  resetForm();
  modalAddBlur.style.display = "block";
  barMobile.style.display = "flex";
});

modalButtonClose.addEventListener("click", () => {
  modalAddBlur.style.display = "none";
  pictureDefault.src = url;
  if (window.innerWidth < 640) barMobile.style.display = "flex";
});
