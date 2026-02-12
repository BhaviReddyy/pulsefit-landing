// FORM VALIDATION
document.getElementById("signupForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        e.preventDefault();
    }

});

// HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});