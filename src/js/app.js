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
    });
  
    dashboardLink.addEventListener('click', () => {
      // Code to handle the dashboard navigation
    });
  
    loginLink.addEventListener('click', () => {
      // Code to handle the login navigation
    });
  
    signupLink.addEventListener('click', () => {
      // Code to handle the signup navigation
    });
  
// Handle form submissions
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Code to handle login form submission
    });
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Code to handle signup form submission
    });
  
    createPostForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Code to handle create post form submission
    });
  
   
  });
  