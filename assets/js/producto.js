consulta();
window.onload = function(){
    cargarImagenes();
}

let imagenes = document.getElementById('imagenes');
let imagen = document.getElementById('image');

let avanzarbtn = document.getElementById('avanzar');
let retrocederbtn = document.getElementById('retroceder');
const imagenesProducto = [
    {
        link: "https://raw.githubusercontent.com/BrayanGuerreroXD/sejmet_whips_store_frontend/main/assets/images/products_images/AZ%C3%93TAME%20ADAM%20%26%20EVE%20WHIP/AZ%C3%93TAME%20ADAM%20%26%20EVE%20WHIP%20%231.png"
    },
    {
        link: "https://raw.githubusercontent.com/BrayanGuerreroXD/sejmet_whips_store_frontend/main/assets/images/products_images/AZ%C3%93TAME%20ADAM%20%26%20EVE%20WHIP/AZ%C3%93TAME%20ADAM%20%26%20EVE%20WHIP%202.webp"
    }
    ,
    {
        link: "https://raw.githubusercontent.com/BrayanGuerreroXD/sejmet_whips_store_frontend/main/assets/images/products_images/AZ%C3%93TAME%20ADAM%20%26%20EVE%20WHIP/AZ%C3%93TAME%20ADAM%20%26%20EVE%20WHIP%203.webp"
    }
];
let imagenPosicion = 0;


function cargarImagenes(){
    let innerHtml = '';
    imagen.src = imagenesProducto[imagenPosicion]?.link;
    imagenesProducto.slice(imagenPosicion-1 <= 0? 0:imagenPosicion-1 , imagenPosicion == 0? imagenPosicion+3:imagenPosicion+1).forEach( img => {
        innerHtml += `
            <image src="${img.link}" class="m-3">
        `;
    });
    imagenes.innerHTML = innerHtml;
}

function upImagen(){
    if(imagenPosicion > 0) {
        imagenPosicion --;
        cargarImagenes();
    }
}

function downImagen(){
    if(imagenPosicion < imagenesProducto.length-1) {
        imagenPosicion ++;
        cargarImagenes();
    }
}


function consulta() {
  fetch('http://localhost:8080/products/1')
    .then(response => response.json())
    .then(data => construir(data));

}
function construir(data){
    let nameProduct = document.getElementById("strProducto1");
    let nameProduct2 = document.getElementById("strProducto2");
    let descriptionProduct = document.getElementById("descriptionproduct");
    let rasgo = document.getElementById("feature");
    let instruction = document.getElementById("Instructions");
    let price = document.getElementById("precio");
    let idproduct = document.getElementById("idproducto");
    let existencia = document.getElementById("stock")

    price.textContent= data.salePrice;
    idproduct.textContent ="No."+ data.id;
    nameProduct.textContent =data.productName;
    nameProduct2.textContent= data.productName;
    descriptionProduct.textContent = data.productCharacteristics;
    rasgo.textContent= data.category.categoryDescripton;
    instruction.textContent = data.productDescription;
    if(data.stock>0)existencia.textContent="In stock"
    else existencia.textContent="Out of Stock"
}
