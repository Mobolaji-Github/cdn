document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  }

  function validateForm() {
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const errorElement = document.getElementById("error");

    if (password !== confirmPassword) {
      errorElement.innerHTML = "Error: Passwords do not match.";
      return false;
    }
    if (password.length < 5) {
      errorElement.innerHTML = "Error: Password must be at least 5 chars long.";
      return false;
    }
    return true;
  }
});
