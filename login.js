// Get form element
const loginForm = document.getElementById('login-form');

// Add submit event listener to the form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login authentication (example code)
  if (username === 'mathewreis' && password === 'Mat102509!') {
    alert('Login successful!');
    // Redirect to another page after successful login
    window.location.href = 'https://floyd.on.fleek.co/adminviewer.html';
  } else {
    alert('Username/Password is incorrect. Please try again.');
  }
});
