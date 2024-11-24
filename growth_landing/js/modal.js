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

const onKeyDown = e => {
  if (e.code === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
    refs.modal.classList.add('is-hidden');
  }
};

const onModalClick = e => {
  if (e.target === refs.modal) {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
};

document.addEventListener('keydown', onKeyDown);

refs.modal.addEventListener('click', onModalClick);

refs.openBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);
