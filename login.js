let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let myInput = document.getElementById("email");
  let myRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (myInput.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = `Le champs e-mail est requis! `;
  } else if (myRegex.test(myInput.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = `e-mail invalide !`;
  }
  let myInputpwd = document.getElementById("pwd");
  if (myInputpwd.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = `un mot de passe est requis !`;
  } else {
    let myError = document.getElementById("error");
    myError.innerHTML = `connexion établie ! `;
  }
});
