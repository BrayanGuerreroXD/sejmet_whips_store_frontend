document.getElementById('add_cart_aprhodisia').dataset.id = 1;
document.getElementById('img_aprhodisia').dataset.id = 1;

document.getElementById('add_cart_paddle').dataset.id = 2;
document.getElementById('img_paddle').dataset.id = 2;

document.getElementById('add_cart_spade').dataset.id = 3;
document.getElementById('img_spade').dataset.id = 3;


// Load data-id of card button "Add to cart"
document.addEventListener('click', function (e) {
    e.preventDefault();
    let elemento = e.target;
    let dataID = elemento.getAttribute('data-id');
    enviarproducto(dataID);
});


// Load the id variable in the localstorage
function enviarproducto(item) {
    localStorage.setItem('id', item);
}