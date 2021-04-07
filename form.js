function validate() {

var username = document.getElementById("username");
if (username.value.length < 4 || username.value.length > 12) {
alert("Incorrent username");
document.getElementById("username").style.borderColor = "red";
return false;
}

 var password = document.getElementById("password");
if (password.value.length < 6 || password.value.length > 12) {
alert("Password  should at least be 6 characters long");
document.getElementById("password").style.borderColor = "red";
return false;
}
return true;
}