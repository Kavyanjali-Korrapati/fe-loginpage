function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if (username === "" || password === "") {
        document.getElementById("message").innerText = "Fill all fields!";
        return;
    }

    // store user data
    let user = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("message").innerText = "Registered successfully!";
}

function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        document.getElementById("message").innerText = "Please register first!";
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Invalid credentials!";
    }
}


// Toggle between login and register forms
function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Toggle password visibility
function togglePassword() {
    let passField = document.getElementById("loginPass");
    let btn = document.getElementById("toggleBtn");

    if (passField.type === "password") {
        passField.type = "text";
        btn.innerText = "Hide";
    } else {
        passField.type = "password";
        btn.innerText = "Show";
    }
}