const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');

const errorMessage = document.querySelector('.error-msg');

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        password.classList.toggle('error');
        confirmPassword.classList.toggle('error');
        errorMessage.textContent = '* Passwords do not match';
    } else if (confirmPassword.value === password.value) {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMessage.textContent = '';
    }
}

