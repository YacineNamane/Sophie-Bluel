//generat works in modal
const fetchgallery = async () => {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  console.log(data);
  return data;
};
const galleryDisplay = async (works) => {
  document.querySelector(".modal-body").innerHTML = works
    .map(
      (figure) => `
    <div class="figure-modal" id= "figure-modal${figure.id}" data-id="${figure.id}"> 
    <img src="${figure.imageUrl}"  alt=" image gallery " alt ="imagie figure ${figure.name}" />
    <div ><i class="fa-solid fa-trash-can"></i></div>
    <figcaption >${figure.title}</figcaption>
    </div>
    `
    )

    .join("");
};
const init = async () => {
  const gallery = await fetchgallery();
  galleryDisplay(gallery);
};

init();

// Open close modal

function openModal() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").classList.add("modal--open");
}

function closeModal() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".modal").classList.remove("modal--open");
}

function openEditBtn() {
  document.getElementById("edit-btn").style.display = "block";
}

// formAjout
function openAjoutBtn() {
  document.getElementById("formAjout").style.display = "block";
}

//delete galerie modal
function deleteModal() {
  document.querySelector(".modal-body").style.display = "none";
}

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
  document.getElementById("hide").style.display = "none";
  document.getElementById("hide").style.display = "submit";
}
