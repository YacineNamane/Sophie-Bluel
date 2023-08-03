//evoyer le formulaire vers notre API

const API_URL = "http://localhost:5678/api/users/login";
const loginForm = document.getElementById("myForm");
let user = {
  email: "",
  password: "",
};

async function attenmptLogin(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  localStorage.setItem("token", data.token);
  window.location.href = "index.html";
  console.log(data);
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;

  user = {
    email: email,
    password: password,
  };
  console.log(user);
  attenmptLogin(user);
});
