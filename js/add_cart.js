//const card = document.getElementById('card');

let carrito = {}
let id = localStorage.getItem('id');


document.addEventListener('DOMContentLoaded', () => {
    fetchProduct()
    carrito = localStorage.getItem('carrito');
    if (carrito === null) {
        carrito = [];
    } else {
        carrito = JSON.parse(carrito);
    }
}
)

const fetchProduct = async()=>{
	try{
		const res = await fetch('http://localhost:8080/products/'+id)
		const data = await res.json()
		addCart(data)

	}catch(error){
		console.log(error)
	}
}

//console.log(card);

// if (card) {
//     card.addEventListener('click', e =>{
//         consultar(e)
//     });
// }

// const consultar = e => {
//     console.log(e.target)
//     if (e.target.classList.contains('btn-dark')) {
//         fetchProduct();
//     }

//     e.stopPropagation()
// }

// // Cargar datos del producto por ID
// function fetchProduct() {
//     fetch('http://localhost:8080/products/'+id)
//         .then(response => response.json())
//         .then(data => addCart(data));
// }

function addCart(data) {
    const product = {
        id: id,
        title: data.productName,
        price: data.salePrice,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(product.id)) {
        product.cantidad = carrito[product.id].cantidad + 1
    }

    carrito[product.id] = { ...product }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}