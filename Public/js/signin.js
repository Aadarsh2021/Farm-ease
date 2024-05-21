document.getElementById('signin-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create user object
    var user = {
        email: email,
        password: password
    };

    // Send form data to backend
    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            // Redirect to dashboard page upon successful signin
            window.location.href = '/dashboard.html';
        } else {
            // Handle error responses
            if (response.status === 404) {
                throw new Error('User not found. Please check your email.');
            } else if (response.status === 401) {
                throw new Error('Invalid password. Please try again.');
            } else {
                const errorMessage = await response.text(); // Get error message from response body
                throw new Error(errorMessage);
            }
        }
    } catch (error) {
        console.error('Error signing in user:', error);
        // Display error message to the user
        alert(error.message);
    }
});
