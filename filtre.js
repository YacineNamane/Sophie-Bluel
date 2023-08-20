import { fetchgellery } from "./api.js";
import { galleryDisplay } from "./index.js";
import { fetchcategories } from "./api.js";

let categories = [];

const categoriesDisplay = async () => {
  const categories = await fetchcategories();

  const filters = [
    ...new Set(
      categories.map((btn) => {
        return btn;
      })
    ),
  ];

  document.getElementById("btns").innerHTML = categories
    .map((btn) => {
      var { name, id } = btn;
      return `
        
         <button class="button option-categorie"  data-categorie='${id}'> ${name}</button>
      
        `;
    })
    .join("");

  filter();
};
//button all works

const allObjects = await fetchgellery();
const btnAll = document.querySelector(".allworks");
btnAll.addEventListener("click", function () {
  galleryDisplay(allObjects);
});

const filter = async () => {
  const buttonsCategorie = document.querySelectorAll(".option-categorie");
  const gallery = await fetchgellery();
  buttonsCategorie.forEach((button) => {
    button.addEventListener("click", () => {
      //récupérer les gallery
      const idGallery = button.dataset.categorie;
      const works = gallery.filter((item) => {
        return item.category.id === Number.parseInt(idGallery);
      });
      galleryDisplay(works);
    });
  });
};

export { categoriesDisplay };
