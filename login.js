let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function () {
  let myInput = document.getElementById("email");
  let myRegex = "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+";
  if (myInput.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = `Le champs e-mail est requis! `;
    e.preventDefault();
  } else if (myRegex.test(myInput.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = `e-mail invalide !`;
  }
});
