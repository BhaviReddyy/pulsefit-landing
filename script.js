/* Hamburger Menu */

const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Form Validation */

document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if (email === "") {
        msg.style.color = "red";
        msg.textContent = "Please enter email";
    } else {
        msg.style.color = "green";
        msg.textContent = "Successfully Registered!";
    }

});