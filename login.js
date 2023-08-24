import { login } from "./api.js";

const loginForm = document.getElementById("myForm");
let user = {
  email: "",
  password: "",
};

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;

  user = {
    email: email,
    password: password,
  };
  console.log(user);
  const loginResponse = await login(user);
  if (loginResponse.connected) {
    localStorage.setItem("sophie_buel_data", JSON.stringify(loginResponse));
    window.location.href = "index.html";
  } else {
    //traitement du message d'erreur
    document.querySelector(".error").innerHTML = `Identifiants incorrects`;
  }
});
