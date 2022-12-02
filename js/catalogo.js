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
    let innerHtml = '';
    for(let i = 0; i < 30; i++){
        innerHtml += `
            <div class="card m-2 p-2" style="width: 14rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">APHRODISIA LEATHER WHIP</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn mb-3" style="background-color: crimson; width: 100%;">Add to cart</button>
                    <button class="btn mb-3" style="border-color: crimson; width: 100%">Buy now</button>
                    <a href="#" style="color: crimson; width: 100%">Read reviews</a>
                </div>
            </div>
        `;
    }
    catalog.innerHTML = innerHtml;
}   