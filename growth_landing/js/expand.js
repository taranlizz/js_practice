const refs = { questionsList: document.querySelector('.questions-list') };

refs.questionsList.addEventListener('click', e => {
  if (!e.target.matches('[data-expand]')) {
    return;
  }

  e.target.parentElement.classList.toggle('expanded');
});
