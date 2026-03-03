
window.addEventListener("DOMContentLoaded", () => {
    const username = sessionStorage.getItem("username");
    if (!username) {
        window.location.href = "index.html";
    }
});

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}