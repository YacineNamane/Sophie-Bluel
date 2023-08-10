//evoyer le formulaire vers notre API

const API_URL = "http://localhost:5678/api/users/login";
const loginForm = document.getElementById("myForm");
let user = {
  email: "",
  password: "",
};

async function attenmptLogin(user) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      return data.token;
    }
    /*localStorage.setItem("token", data.token);
  window.location.href = "index.html";*/
  } catch (error) {
    console.log(error);
  }
}

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;

  user = {
    email: email,
    password: password,
  };
  console.log(user);
  const token = await attenmptLogin(user);
  if (token) {
    localStorage.setItem(
      "sophie_buel_data",
      JSON.stringify({ token, connected: true })
    );
    window.location.href = "index.html";
  } else {
    //traitement du message d'erreur
    document.querySelector(".error").innerHTML = `Identifiants incorrects`;
  }
});

/*//Gestion logout
function logout() {
  const log = document.getElementById("log");
  console.log(log);

  log.innerHTML = `logout`;

  log.addEventListener("click", function () {
    localStorage.clear();
  });
}

//edite mode config

function displayEditMode() {
  const PannelModal = document.querySelector("modal-pannel");
  console.log(PannelModal);
  document.querySelector("modal-pannel").Style.display = "block";
}
*/
