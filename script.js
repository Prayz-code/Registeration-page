const loginPageElem = document.getElementById('loginPage');
const loginFormElem = document.getElementById('loginForm');
const userEmail = document.getElementById('email');
const emailErrorElem = document.getElementById("emailError");
const userPassword = document.getElementById('password');
const passwordErrorElem = document.getElementById("passwordError");
const loginButtonElem = document.getElementById("loginButton");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = userEmail.value.trim();
    const password = userPassword.value.trim();

    let hasError = false;

    if (email.length === 0) {
        emailErrorElem.textContent = "Please enter correct email or username";
        emailErrorElem.className = "error";
        userEmail.classList.add("input-error");

        hasError = true;
    }

    if (password.length === 0) {
        passwordErrorElem.textContent = "Incorrect password";
        passwordErrorElem.className = "error";
        userPassword.classList.add("input-error");

        hasError = true;
    }

    if (hasError) {
        return;
    }

    const requestApiUrl = "https://igronchain.onrender.com/auth/login"
    const requestApiOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }

    try {
        const response = await fetch(requestApiUrl, requestApiOptions);
        const data = await response.json();


        if (!response.ok) {
            loginButtonElem.textContent = "Error login details";
            return;
        }
    } catch (error) {
        loginButtonElem.textContent = error.message;
    }

    loginForm.textContent = "Login Successful!";

});

