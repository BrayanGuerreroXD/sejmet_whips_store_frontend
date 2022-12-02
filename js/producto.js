window.onload = function(){
    cargarImagenes();
}

let imagenes = document.getElementById('imagenes');
let imagen = document.getElementById('image');

let avanzarbtn = document.getElementById('avanzar');
let retrocederbtn = document.getElementById('retroceder');
const imagenesProducto = [
    {
        link: "https://media.gcflearnfree.org/global/coding/html-basico/resources/img/perro-basquetbolista.png"
    },
    {
        link: "https://img.freepik.com/vector-gratis/fondo-diseno-web_1300-39.jpg?w=740&t=st=1669494630~exp=1669495230~hmac=c89cea9a3372cecb5643f3385962a4684ef1b4000a3a96f236a8b3fffed9c967"
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