let gallery = [];

const fetchgellery = async () => {
await fetch("http://localhost:5678/api/works")
.then(res => res.json())
.then((promise) => {
    gallery = promise;
    console.log(gallery);
});
};

const galleryDisplay = async () =>{
    await fetchgellery();

document.getElementById('portfolio').innerHTML = gallery.map((figure)=> `
<div id= "figure${figure.id}" class=".gallery "> 
<img class=".gallery " src="${figure.imageUrl}" alt=" image gallery " alt ="imagie figure ${figure.name}"/>
<figcaption>${figure.title}</figcaption>
</div>
`,
);
};

galleryDisplay();

