import { fetchgellery } from "./api.js";
import { galleryDisplay } from "./index.js";
import { fetchcategories } from "./api.js";

let categories = [];

const categoriesDisplay = async () => {
  const categories = await fetchcategories();
  categories.unshift({ id: 0, name: "Tous" });

  console.log(categories);

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
      const categorieIdString = button.dataset.categorie;
      const categorieId = Number.parseInt(categorieIdString);
      const works = gallery.filter((item) => {
        return categorieId === 0 ? true : item.category.id === categorieId;
      });
      galleryDisplay(works);
    });
  });
};

export { categoriesDisplay };
