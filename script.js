const form = document.querySelector('.main__form');
const formBtn = document.querySelector('.main__form-btn');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Passwords doesn't match");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
})

formBtn.addEventListener('click', () => {
  form.classList.add('invalid');
})
