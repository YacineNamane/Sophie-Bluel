import { fetchgellery } from "./api.js";
const galleryDisplay = async () => {
  const gallery = await fetchgellery();

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
