//generat works in modal
const fetchgallery = async () => {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  return data;
};
const galleryDisplay = async (works) => {
  document.querySelector(".modal-body").innerHTML = works
    .map(
      (figure) => `
    <div class="figure-modal" id= "figure-modal${figure.id}" data-id="${figure.id}"> 
    <img src="${figure.imageUrl}"  alt=" image gallery " alt ="imagie figure ${figure.name}" />
    <div ><i class="fa-solid fa-trash-can"></i></div>
    
    </div>
    `
    )

    .join("");
};
const init = async () => {
  const gallery = await fetchgallery();
  galleryDisplay(gallery);
  const inputFile = document.getElementById("ajoutImage");
  inputFile.addEventListener("change", (event) => loadFile(event));
};

init();

// Open close modal

const openModal = document.getElementById("edit-btn-deux");
openModal.addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").classList.add("modal--open");
});

document.querySelectorAll(".fa-xmark").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".modal").classList.remove("modal--open");
  });
});
//arrow back not finished
const arrowBAck = document.querySelector(".fa-arrow-left");
arrowBAck.addEventListener("click", () => {
  document.querySelector(".formajoutflex").style.display = "none";
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").classList.add("modal--open");
});

//edit-btn show
const displayEditBtn = document.querySelector(".edite");
displayEditBtn.addEventListener("click", () => {
  document.getElementById("edit-btn").style.display = "block";
  document.getElementById("edit-btn-deux").style.display = "block";
});

//open form ajout
const openAjoutBtn = document.querySelector(".ajouterunephoto");
openAjoutBtn.addEventListener(
  "click",
  () => (document.getElementById("formAjout").style.display = "block")
);

//submit changes
const submitChanges = document.getElementById("submitChanges");
submitChanges.addEventListener("click", () => {
  (document.getElementById("edit-btn").style.display = "none")(
    (document.getElementById("edit-btn-deux").style.display = "none")
  );
});

// load image
function loadFile(event) {
  const img = document.getElementById("output");
  img.src = URL.createObjectURL(event.target.files[0]);
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    img.src = reader.result;
  });
  if (file) {
    reader.readAsDataURL(file);
  }
  document.querySelector(".AjoutImageLabel").style.display = "none";
  document.querySelector(".fa-image").style.display = "none";
  document.querySelector(".tailleimagine").style.display = "none";
}
