import { fetchgellery } from "./api.js";
import { categoriesDisplay } from "./filtre.js";

const galleryDisplay = async (works) => {
  document.querySelector(".gallery ").innerHTML = works
    .map(
      (figure) => `
    <div id= "figure${figure.id}" class=".gallery "> 
    <img class= ".gallery img " src="${figure.imageUrl}" alt=" image gallery " alt ="imagie figure ${figure.name}"/>
    <figcaption >${figure.title}</figcaption>
    </div>
    `
    )

    .join("");
};

const displayAdminMode = () => {
  console.log("build admin mode");
};
const init = async () => {
  const gallery = await fetchgellery();
  galleryDisplay(gallery);
  categoriesDisplay();
  const connectedData = localStorage.getItem("sophie_buel_data");
  console.log(connectedData);
  if (connectedData) {
    const data = JSON.parse(connectedData);
    if (data.connected) displayAdminMode();
  }

  //Gestion de logout
  if (connectedData !== null) {
    function disconnect() {
      localStorage.clear("token");
    }

    document.getElementById("log").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.querySelector(".filtre-bloc").style.display = "none";
    document.getElementById("logout").addEventListener("click", () => {
      disconnect();
      window.location.href("index.html");
    });
  }

  if (connectedData == null) {
    document.querySelector(".mdl").style.display = "none ";
    document.getElementById("edit-btn").style.display = "none";
    document.getElementById("logout").style.display = "none";
    document.getElementById("log").style.display = "block";
  }

  // DELETE WORK

  const deleteProject = document.querySelectorAll(".fa-trash-can");
  let id = 0;
  for (let i = 0; i < deleteProject.length; i++) {
    deleteProject[i].addEventListener("click", (e) => {
      e.preventDefault();

      const workId = gallery.map((figure) => figure.id);
      id = workId[i];
      fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${connectedData}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Deleted");
          } else {
            console.log("cannot delte this something went wrong!");
          }
        })
        .catch((error) => console.log(error));
    });
  }
};

init();

export { galleryDisplay };
