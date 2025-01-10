const openFormBtn = document.querySelector("[data-open]");
const closeFormBtn = document.querySelector("[data-close]");
const addEntryForm = document.querySelector("[data-form]");

const onOpenFormBtnClick = () => {
  openFormBtn.classList.toggle("is-hidden");
  addEntryForm.classList.toggle("is-hidden");
};

const onCloseFormBtnClick = () => {
  addEntryForm.classList.toggle("is-hidden");
  openFormBtn.classList.toggle("is-hidden");
};

openFormBtn.addEventListener("click", onOpenFormBtnClick);
closeFormBtn.addEventListener("click", onCloseFormBtnClick);
