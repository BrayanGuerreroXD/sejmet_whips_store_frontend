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

// function fetchImages() {
//     fetch('http://localhost:8080/images')
//         .then(response => response.json())
//         .then(images => images(images));
// }

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
const urlProductos='http://localhost:8080/products/'

let categoriaone = document.getElementById("categoria1");
let categoriaTwo = document.getElementById("categoria2");


function consulta(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => construir(data));
  
  }
  function construir(data){
  
    categoriaone.textContent = data[0].categoryName;
    categoriaTwo.textContent = data[1].categoryName;
  }
// function cargarProductos() {
//     let innerHtml = '';
//     for(let i = 0; i < 9; i++){
//         innerHtml += `
//             <div class="card m-2 p-2" style="width: 14rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">APHRODISIA LEATHER WHIP</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <button class="btn mb-3" style="background-color: crimson; width: 100%;">Add to cart</button>
//                     <button class="btn mb-3" style="border-color: crimson; width: 100%">Buy now</button>
//                     <a href="#" style="color: crimson; width: 100%">Read reviews</a>
//                 </div>
//             </div>
//         `;
//     }
//     catalog.innerHTML = innerHtml;
// }   