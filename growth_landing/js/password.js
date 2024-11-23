const passwordInput = document.querySelector('[data-password]');
const passwordShowChb = document.querySelector('[data-password-show]');
const passwordLabel = document.querySelector('[data-password-label]');

function showPassword() {
  passwordInput.type = passwordShowChb.checked ? 'text' : 'password';
}

function onMouseDownLabel(e) {
  e.preventDefault();
}

passwordLabel.addEventListener('mousedown', onMouseDownLabel);
passwordShowChb.addEventListener('change', showPassword);
