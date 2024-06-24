document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

 
  const validUsername = 'admin';
  const validPassword = 'password';

  if (username === validUsername && password === validPassword) {
      alert('Login successful!');
  } else {
      errorMessage.textContent = 'Invalid username or password.';
  }
});
