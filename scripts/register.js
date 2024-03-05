function redirectToLogin() {
    window.location.href = 'login.html';
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create user object
    var user = {
        name: name,
        email: email,
        password: password
    };

    // Get existing users from local storage or initialize empty array
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    var existingUser = users.find(function(existingUser) {
        return existingUser.email === email;
    });

    if (existingUser) {
        // Redirect to login page if user already exists
        window.location.href = 'login.html';
        return;
    }

    // Add new user to the array
    users.push(user);

    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page
    window.location.href = 'login.html';
});
