//Using exernal JS in web development//

//check passwod correctness//
function checkpassword() {
    var passwordBoxObject = document.getElementById("passwordBox");

    var passwordEntered = passwordBoxObject.value;

    console.log("User entered password:",    passwordEntered);

    var sitePassword = "codeclub";
    if (passwordEntered == sitePassword) {
        console.log("Allow");
        window.location.assign(
            "members.html");
} else {
    console.log("Try again/block!");
   //add a new style rule to the incorrect password element//
    document.getElementById("incorrect-password").style.color = "red";
    //add text to the incorrect password element//
    document.getElementById("incorrect-password").
    innerHTML = "incorrect password. please try again";

   
}
}
