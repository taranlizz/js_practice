const refs = {
  faqBtnList: document.querySelector('.faq-button-list'),
  questionsList: document.querySelector('.questions-list'),
  questionItems: document.querySelectorAll('.question-item'),
};

refs.faqBtnList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const filter = e.target.dataset.filter;

  refs.questionItems.forEach(item => {
    item.style.display =
      filter === 'all' || item.dataset.category === filter ? '' : 'none';
  });
});
