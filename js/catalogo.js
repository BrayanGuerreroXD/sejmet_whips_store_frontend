window.onload = function(){
    slideOne();
    slideTwo();
    cargarProductos()
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

let catalog = document.getElementById("catalogo");
let cardproducto = document.getElementById("cardproducto");
let imgproduct = document.getElementById("imgproduct");
let nameP = document.getElementById("nombreP");
let contenP = document.getElementById("contenidoP");
let add = document.getElementById("add");
let buy = document.getElementById("buy");
let details = document.getElementById("detalles");

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
}

function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , crimson ${percent1}% , crimson ${percent2}%, #dadae5 ${percent2}%)`;
}

function cargarProductos() {
    let imagen = "https://tuagro.com/wp-content/uploads/2019/06/IMG_20190611_102143.jpg";
    let nombreStr="pegarico";
    let contenido="si pega rico";
    for(let i = 0; i < 9; i++){
        let carta=cargarproducto(imagen,nombreStr,contenido);
        
    }
} 
 function cargarproducto(imagen,nombreStr,contenido) {
    let cartaP =cardproducto.cloneNode();
        let imagenP=imgproduct.cloneNode();
        let nombre= nameP.cloneNode();
        let contenidoP=contenP.cloneNode();
        let añadir = add.cloneNode();
        let comprar = buy.cloneNode();
        let detalles = details.cloneNode();

        imagenP.setAttribute('src', imagen)
        nombre.insertAdjacentText('beforeend', nombreStr);
        contenidoP.insertAdjacentText('beforeend', contenido);
        añadir.insertAdjacentText('beforeend', "Add to car");
        comprar.insertAdjacentText('beforeend', "Buy now");
        detalles.insertAdjacentText('beforeend', "see more");

        cartaP.insertAdjacentElement('beforeend',imagenP);
        cartaP.insertAdjacentElement('beforeend',nombre);
        cartaP.insertAdjacentElement('beforeend',contenidoP);
        cartaP.insertAdjacentElement('beforeend',añadir);
        cartaP.insertAdjacentElement('beforeend',comprar);
        cartaP.insertAdjacentElement('beforeend',detalles);

    catalog.insertAdjacentElement('beforeend',cartaP);
}



let categoriaone = document.getElementById("categoria1");
let categoriaTwo = document.getElementById("categoria2");
consulta();

function consulta() {
    fetch('http://localhost:8080/categories')
      .then(response => response.json())
      .then(data => construir(data));
  
  }
  function construir(data){
  
    categoriaone.textContent = data[0].categoryName;
    categoriaTwo.textContent = data[1].categoryName;
  }