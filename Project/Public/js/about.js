// JavaScript functionality goes here

// Example: Toggle navigation menu for smaller screens
const toggleNav = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
};

// Example: Subscribe to newsletter form submission
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    // Handle subscription here
});
