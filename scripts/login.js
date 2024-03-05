document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Get users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any user
    var authenticatedUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (authenticatedUser) {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        // Show error message or handle unsuccessful login
        alert('Invalid email or password. Please try again.');
    }
});
