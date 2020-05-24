function onLoad_signin() {
     console.log("Inside onLoad_signin");
     document.getElementById("signinform").addEventListener("submit", function(event){
               event.preventDefault();
          });
}
function onClickSignin() {
     console.log("Inside onClickSignin");
     var formElements = document.getElementById("signinform");
     var email = formElements.email.value;
     var psw = formElements.psw.value;
     var invalid =document.getElementById("invalid");

     console.log(email);
     console.log(psw);
     if(email == "email" && psw == "psw"){
          console.log("valid");
          invalid.hidden = true;
          window.location = "shoppingHome.html";
     }
     else {
          invalid.hidden = false;
     }
}
