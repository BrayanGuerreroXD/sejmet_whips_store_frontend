fetchData();
window.onload = function () {
    slideOne();
    slideTwo();
    //cargarProductos()
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

let catalog = document.getElementById("catalogo");
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , crimson ${percent1}% , crimson ${percent2}%, #dadae5 ${percent2}%)`;
}


// Cargar datos de los productos
function fetchData() {
    fetch('http://localhost:8080/products')
        .then(response => response.json())
        .then(data => pintarCard(data));
}

// Pintar las cards de los productos 
function pintarCard(data) {
    data.forEach(item => {
        let price = templateCard.getElementById("price");
        let title = templateCard.getElementById("title");
        let description = templateCard.getElementById("description");

        templateCard.getElementById("add_cart").dataset.id = item.id;

        price.textContent = "$" + item.salePrice;
        title.textContent = item.productName;
        description.textContent = item.productDescription;

        templateCard.querySelector('img').setAttribute('src', "/assets/images/products_images/" + 
            (item.productName) + "/" + (item.productName) + " 1.jpg");

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    catalog.appendChild(fragment);
}
const urlcategorias='http://localhost:8080/categories'

let categoriaone = document.getElementById("categoria1");
let categoriaTwo = document.getElementById("categoria2");
consulta(urlcategorias);

function consulta(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => construir(data));
  
  }
  function construir(data){
  
    categoriaone.textContent = data[0].categoryName;
    categoriaTwo.textContent = data[1].categoryName;
  }