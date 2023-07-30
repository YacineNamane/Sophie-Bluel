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
        
         <button class="button"  ${id}> ${name}</button>
      
        `;
    })
    .join("");
};

categoriesDisplay();
