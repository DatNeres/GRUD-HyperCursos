const popupEdit = document.querySelector(".popup__edit");
const popupEditButtonCancel = document.querySelector(".popup__edit__button__cancel");
const popupEditButtonSave = document.querySelector(".popup__edit__button__save");
const popupDelete = document.querySelector(".popup__delete");
const popupDeleteButtonCancel = document.querySelector(".popup__delete__button__cancel");
const popupDeleteButtonConfirm = document.querySelector( ".popup__delete__button__continue");
const mainButtonDelete = document.querySelectorAll(".main__button--delete");
const menuButtonEdit = document.querySelector(".menu__buttons--edit");
const barMobile = document.querySelector('.bar__mobile')
const barMobileButtonEdit = document.querySelector('#bar__mobile__button__edit');
const barMobileButtonSearch = document.querySelector('#bar__mobile__button__search');
const barMobileButtonAdd = document.querySelector('#bar__mobile__button__add');
const mainContent = document.querySelectorAll('.main__content')

let toRemove;
let mainInfosEditStatus = false

function mainInfosEdit(){ 
  mainContent.forEach((mainContent) => {
    mainContent.addEventListener("click", () => {
      if(!mainInfosEditStatus) return;
      else{
        modalAddBlur.style.display = 'block';
        modalAddBlurButtonSave.style.display = 'none';
        modalAddBlurButtonUpdate.style.display = 'block'
        modalH1.textContent = 'Atualizar Informações'
        
        const valuetd = mainContent.querySelectorAll('td')
        inputName.value = valuetd[0].textContent;
        inputCpf.value = valuetd[1].textContent;
        inputBirtday.value = valuetd[2].textContent;
        inputCellphone.value = valuetd[3].textContent  
        inputEmail.value = valuetd[4].textContent;   
        
        const newImage = mainContent.querySelector('img')
        pictureDefault.src = newImage.src;
        
        modalAddBlurButtonUpdate.addEventListener('click', () => {
        valuetd[0].textContent = inputName.value ;
        valuetd[1].textContent = inputCpf.value; 
        valuetd[2].textContent = inputBirtday.value ;
        valuetd[3].textContent = inputCellphone.value ;
        valuetd[4].textContent = inputEmail.value ;
        
        modalAddBlur.style.display = 'none';
        modalAddBlurButtonSave.style.display = 'block';
        modalAddBlurButtonUpdate.style.display = 'none';
        pictureDefault.src = url;
        })
      }
    });
  });
}

menuButtonEdit.addEventListener("click", () => { 
  mainInfosEditStatus = true
  mainInfosEdit();
  popupEdit.style.display = "flex"; 
  modalButtonAdd.disabled = true;
  modalSearch.disabled = true;
  modalButtonAdd.style.cursor = 'not-allowed';
  modalSearch.style.cursor = 'not-allowed';
  buttonSearch.style.cursor = 'not-allowed';
  for (let btnDelete of mainButtonDelete) {
    btnDelete.style.display = "block";
  }

});

function CancelPopupEdit (){
  popupEdit.style.display = "none"; 
  modalButtonAdd.disabled = false;
  modalSearch.disabled = false;
  modalButtonAdd.style.cursor = 'pointer';
  modalSearch.style.cursor = 'pointer';
  buttonSearch.style.cursor = 'pointer';
  for (let btnDelete of mainButtonDelete) {
    btnDelete.style.display = "none";
  }
  if (window.innerWidth <= 640) barMobile.style.display='flex';
};

popupEditButtonCancel.addEventListener("click", () =>{
  CancelPopupEdit();
  mainInfosEditStatus = false;
});
  
popupEditButtonSave.addEventListener("click", () =>{
  CancelPopupEdit();
  mainInfosEditStatus = false;
});
  

mainButtonDelete.forEach((mainButtonDelete) => {
  mainButtonDelete.addEventListener("click", () => {
    popupDelete.style.display = "grid";
    popupEdit.style.display = "none"
    modalAdd.style.display = 'none'
    toRemove = mainButtonDelete.closest(".main__content");
  });
});

popupDeleteButtonCancel.addEventListener("click", () => {
  popupDelete.style.display = "none";
  modalAddBlur.style.display = "none";
  if ((popupDelete.style.display = "none")) {
    popupEdit.style.display = "flex";
  }
});

popupDeleteButtonConfirm.addEventListener("click", ()=> {
  if (toRemove) toRemove.remove();
  popupDelete.style.display = "none";
  modalAddBlur.style.display = "none";
});



//mobile edit infos


barMobileButtonEdit.addEventListener("click", () => {
  mainInfosEditStatus = true
  mainInfosEdit()
  barMobile.style.display = "none"
  popupEdit.style.display = "flex";
  for (let btnDelete of mainButtonDelete) {
    btnDelete.style.display = "block";
  }
});