import { fetchgellery } from "./api.js";
const galleryDisplay = async () => {
  const gallery = await fetchgellery();

  /*Rendre les filtre fonctionnel*/
  /*const filterFigures = (a) => {
    const filterGallery = gallery.filter(figure);
    function figure(value) {
      if (value.id == a) {
        return value.id;
      }
    }
    displayFigures(filterGallery);
  }; */

  document.querySelector(".gallery").innerHTML = gallery
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

galleryDisplay();
