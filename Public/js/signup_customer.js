document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Get form data
    const response = await fetch('/api/signup/customer', {
        method: 'POST',
        body: formData
    });

    const data = await response.json(); // Parse response JSON

    // Check if response contains an error message
    if (response.status !== 200) {
        // Check if the error message is "User already exists"
        if (data.message === 'User already exists') {
            // Display the specific error message in the error message div
            document.getElementById('error-message').innerText = 'User already exists. Please sign in.';
        } else {
            // Display the general error message from the server
            document.getElementById('error-message').innerText = data.message;
        }
    } else {
        // Clear error message if signup was successful
        document.getElementById('error-message').innerText = '';
        // Redirect to signin page
        window.location.href = '/signin.html';
    }
});
