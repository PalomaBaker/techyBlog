// Add event listeners to handle navigation and form submissions
document.addEventListener('DOMContentLoaded', () => {

    // Navigation links
    const homeLink = document.querySelector('#home-link');
    const dashboardLink = document.querySelector('#dashboard-link');
    const loginLink = document.querySelector('#login-link');
    const signupLink = document.querySelector('#signup-link');
  
    // Form submission buttons
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');
    const createPostForm = document.querySelector('#create-post-form');
  
    // Handle click events for navigation links
    homeLink.addEventListener('click', () => {
      // Code to handle the home page navigation
      window.location.href = '/';
    });
  
    dashboardLink.addEventListener('click', () => {
      // Code to handle the dashboard navigation
      window.location.href = '/dashboard';
    });
  
    loginLink.addEventListener('click', () => {
      // Code to handle the login navigation
      window.location.href = '/login';
    });
  
    signupLink.addEventListener('click', () => {
      // Code to handle the signup navigation
      window.location.href = '/signup';
    });
  
    // Handle form submissions
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Code to handle login form submission
      const email = document.querySelector('#login-email').value;
      const password = document.querySelector('#login-password').value;
      // Call a function to handle login request with email and password
      loginUser(email, password);
    });
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Code to handle signup form submission
      const username = document.querySelector('#signup-username').value;
      const email = document.querySelector('#signup-email').value;
      const password = document.querySelector('#signup-password').value;
      // Call a function to handle signup request with username, email, and password
      signupUser(username, email, password);
    });
  
    createPostForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Code to handle create post form submission
      const title = document.querySelector('#post-title').value;
      const content = document.querySelector('#post-content').value;
      // Call a function to handle create post request with title and content
      createPost(title, content);
    });
  
  });
  