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
    <div class="figure-modal" id= "figure${figure.id}" > 
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
