function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    const correctUser = "cadet";
    const correctPass = "1234";

    if (user === correctUser && pass === correctPass) {
        error.textContent = "";

        // 🔥 REDIRECT TO NEW PAGE
        window.location.href = "cadet.html";

    } else {
        error.textContent = "Invalid username or password";
    }
}
