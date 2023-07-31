import { fetchgellery } from "./api.js";
import { categoriesDisplay } from "./filtre.js";

const galleryDisplay = async (works) => {
  document.querySelector(".gallery").innerHTML = works
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

const init = async () => {
  const gallery = await fetchgellery();
  galleryDisplay(gallery);
  categoriesDisplay();
};

init();

export { galleryDisplay };
