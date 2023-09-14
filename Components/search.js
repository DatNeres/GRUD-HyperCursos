const buttonSearch = document.querySelector("#buttons--search");
const menuButtons = document.querySelector(".menu__buttons");
const modalSearch= document.querySelector(".menu__searchbar");
const modalSearchMobile = document.querySelector(".menu__buttons__mobile")
const inputSearchMobile = document.querySelector(".menu__searchbar__mobile");
const buttonMobileSearch = document.querySelector("#bar__mobile__button__search");
const buttonMobileSearchArrowBack = document.querySelector("#buttons__mobile--arrowback");
const popupNotFound = document.querySelector(".popup__notfound")
const main = document.querySelector(".main")
const containerStudentsData = document.querySelectorAll('.main__content')

function ResetListStudants(){
  for (let listData of containerStudentsData) {
    listData.style.display = window.innerWidth <= 640 ? 'grid' : 'flex';
  } 
}

function search() {
  let searchValue = modalSearch.value.toUpperCase();
  let searchValueMobile = inputSearchMobile.value.toUpperCase();
  let resultsFound = false;

  for (let listData of containerStudentsData) {
    let listContent = listData.textContent.toUpperCase();

    if (!listContent.includes(searchValue || searchValueMobile)) {
      listData.style.display = 'none';
    } else {
      resultsFound = true;
    }
  }

  if (!resultsFound) {
    setTimeout(() =>{
      popupNotFound.style.display = 'flex';
    }, 500);
    setTimeout(() =>{
      popupNotFound.style.display = 'none';
    }, 2500);
  }
}

function resetSearch() {
  if (modalSearch.value === "") {
    ResetListStudants()
  }
}
function resetSearchMobile() {
  if (inputSearchMobile.value === "") {
    ResetListStudants()
  }
}

modalSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    search()
    modalSearchMobile.style.display = 'none';  
  }
})

inputSearchMobile.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    search()
    main.style.display = 'flex';
    menuButtons.style.display = 'none'
  }
});

buttonSearch.addEventListener('click', search)

buttonMobileSearch.addEventListener('click', () => {
  main.style.display = 'none'
  barMobileButtonAdd.style.display = 'none';
  barMobileButtonSearch.style.display = 'none';
  modalSearch.style.display = 'none';
  modalSearchMobile.style.display = 'block';
  inputSearchMobile.style.display = 'block';
  buttonMobileSearchArrowBack.style.display = 'block';
})

buttonMobileSearchArrowBack.addEventListener('click', () =>{
  main.style.display = 'flex'
  menuButtons.style.display = 'none'
  modalSearchMobile.style.display = 'none'
  barMobile.style.display = 'flex'
  barMobileButtonAdd.style.display = 'flex';
  barMobileButtonSearch.style.display = 'flex';
  buttonMobileSearchArrowBack.style.display = 'none';
  ResetListStudants()
})

modalSearch.addEventListener("input", resetSearch);
modalSearchMobile.addEventListener("input", resetSearchMobile);

