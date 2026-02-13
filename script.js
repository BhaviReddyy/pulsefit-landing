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