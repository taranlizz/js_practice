const passwordInput = document.querySelector('[data-password]');
const passwordShowChb = document.querySelector('[data-password-show]');
const passwordLabel = document.querySelector('[data-password-label]');

function showPassword() {
  passwordInput.type = passwordShowChb.checked ? 'text' : 'password';
  passwordLabel.children[1].classList.toggle('is-hidden');
  passwordLabel.children[2].classList.toggle('is-hidden');
}

passwordShowChb.addEventListener('change', showPassword);
