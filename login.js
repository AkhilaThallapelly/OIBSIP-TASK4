// Register user
function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (username && password) {
        // Store the user in localStorage
        localStorage.setItem(username, password);
        document.getElementById('register-message').textContent = 'User registered successfully!';
        document.getElementById('register-message').style.color = 'green';
    } else {
        document.getElementById('register-message').textContent = 'Please fill out all fields.';
    }
}

// Login user
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        // Login successful, store session
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'secured.html'; // Redirect to secured page
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password!';
    }
}
