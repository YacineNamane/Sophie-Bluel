import { fetchgellery, fetchAddWork } from "./api.js";
import { categoriesDisplay } from "./filtre.js";

const galleryDisplay = async (works) => {
  document.querySelector(".gallery ").innerHTML = works
    .map(
      (figure) => `
    <div id="figure${figure.id}" data-id="${figure.id}"> 
    <img class="gallery img" src="${figure.imageUrl}" alt=" image gallery " alt ="imagie figure ${figure.name}"/>
    <figcaption class = "titleimage" >${figure.title}</figcaption>
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
    document.getElementById("edit-btn-deux").style.display = "none";
    document.getElementById("logout").style.display = "none";
    document.getElementById("log").style.display = "block";
  }

  // DELETE WORK

  const figuresModal = document.querySelectorAll(".figure-modal");

  const data = JSON.parse(connectedData);

  figuresModal.forEach((figure) => {
    const trash = figure.querySelector("i");

    trash.addEventListener("click", (e) => {
      const id = figure.dataset.id;

      fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            const figurePage = document.getElementById(`figure${id}`);

            deleteWorkOnModal(figure);
            deleteWorkPage(figurePage);

            // deleteWorkPage(figurePage)

            console.log("Deleted");
          } else {
            console.log("cannot delete this something went wrong!");
          }
        })

        .catch((error) => console.log(error));
    });
  });
  const deleteWorkOnModal = (work) => {
    console.log(work);

    const modalContain = document.querySelector(".modal-body");

    modalContain.removeChild(work);
  };

  const deleteWorkPage = (work) => {
    const workContain = document.querySelector(".gallery ");

    workContain.removeChild(work);
  };

  // ADD new work
  // load image > modal.js

  const formAjout = document.getElementById("formAjout");
  formAjout.addEventListener("submit", async function (event) {
    event.preventDefault();

    const image = document.getElementById("ajoutImage").files[0];
    console.log(image);
    console.log(typeof image);
    const title = document.querySelector("input[name=titre]").value;
    const categorySelect = document.querySelector(
      "select[name=catégorie]"
    ).value;
    const category = parseInt(categorySelect);
    let formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", category);
    const data = JSON.parse(connectedData);

    console.log(formData);
    console.log(connectedData);
    const result = fetchAddWork(formData, data.token);

    console.log(result);
  });
  // traitement d'érreur
  let myFormAjout = document.getElementById("formAjout");
  myFormAjout.addEventListener("submit", function (e) {
    let myInputAjout = document.getElementById("newtitre");
    if (myInputAjout.value.trim() == "") {
      let myError = document.querySelector(".error--ajout");
      myError.innerHTML = "Le champs titre est requis !";
      myError.style.color = "red";
    }
    let myInputSelectCategory = document.getElementById("catégoriechoose");
    if (myInputSelectCategory.value == "") {
      let myErrorCategorys = document.querySelector(".error--category");
      myErrorCategorys.innerHTML = "veuillez Sélectionner une catégorie !";
      myErrorCategorys.style.color = "red";
    }
    e.preventDefault();
  });
};

init();

export { galleryDisplay };
