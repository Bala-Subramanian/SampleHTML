function onLoad_signin() {
     console.log("Inside onLoad_signin");
}
function onClickSignin() {
     console.log("Inside onClickSignin");
     var formElements = document.getElementById("signinform");
     console.log(formElements);
     alert(JSON.stringify(formElements));
}
