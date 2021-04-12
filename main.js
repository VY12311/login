function findUser() {
    var player1_name_input = document.getElementById("player1_name_input").value;
    var player1_name_input_password = document.getElementById("player1_name_input_password").value;
    var Password = localStorage.getItem("Password");
    var Username = localStorage.getItem("Username");
 if (player1_name_input == Username && player1_name_input_password == Password) {
    document.getElementById("player1_name_input").innerHTML = "Logged in sucessfully";
    document.getElementById("player1_name_input_password").innerHTML = "Logged in sucessfully";
 } else {
    document.getElementById("player1_name_input").innerHTML = "Username or password is inncorrect";
 }
}