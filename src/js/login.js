// Add event listener to handle login form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get the email and password from the form inputs
    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;
  
    // Make an AJAX request to the login route on the server
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        if (response.ok) {
          // Login successful, redirect to the dashboard or perform other actions
          // You can also retrieve the token from the response and store it for authentication purposes
          window.location.href = '/dashboard';
        } else {
          // Login failed, display an error message
          console.error('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  