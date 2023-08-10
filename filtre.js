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

//mes filtres

/*const btnAll = document.querySelector("btn-all");
  btnAll.addEventListener("click", function () {
    generateWorks(works);
  });

  const btnObjects = document.querySelector(".btn-objects");
  btnObjects.addEventListener("click", function () {
    const filterObjects = gallery.filter(
      (work) => work.categorie.name === "object"
    );
    generateWorks(filterObjects);
  });

  const btnAppartments = document.querySelector(".btn-Appartments");
  btnAppartments.addEventListener("click", function () {
    const filterAppartments = gallery.filter(
      (work) => work.categorie.name === "Appartements"
    );
    generateWorks(filterAppartments);
  });

  const btnHotels = document.querySelector(".btn-Hotels");
  btnHotels.addEventListener("click", function () {
    const filterHotels = gallery.filter(
      (work) => work.categorie.name === "Hotels"
    );
    generateWorks(filterHotels);
  });
  galleryDisplay(works);
};
*/
