const refs = {
  body: document.querySelector('body'),
  modal: document.querySelector('[data-modal]'),
  openBtn: document.querySelector('[data-modal-open]'),
  closeBtn: document.querySelector('[data-modal-close]'),
};

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
};

refs.openBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);
