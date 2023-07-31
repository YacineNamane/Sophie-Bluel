import { fetchgellery } from "./api.js";
import { galleryDisplay } from "./index.js";

let categories = [];

const fetchcategories = async () => {
  await fetch("http://localhost:5678/api/categories")
    .then((ser) => ser.json())
    .then((promise) => {
      categories = promise;
      console.log(categories);
    });
};

const categoriesDisplay = async () => {
  await fetchcategories();

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
