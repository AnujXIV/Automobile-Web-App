document.getElementById("Sign-in").onclick = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var d_email = "anujpatelx14@gmail.com";
    var d_pass = "anuj12345";


    if (email == d_email && password == d_pass) {
        window.location.replace('../profile.html');
    } else {
        alert("Credentials Incorrect");
        window.location.replace('../auth-templates/sign-in.html');
    }
}