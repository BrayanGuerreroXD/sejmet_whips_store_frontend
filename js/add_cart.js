const card = document.getElementById('card');

let carrito = {}
let id = localStorage.getItem('id');

document.addEventListener('DOMContentLoaded', () => {
    fetchProduct();
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
}
)

const fetchProduct = async () => {
    try {
        const res = await fetch('http://localhost:8080/products/' + id)
        const data = await res.json()
        addCart(data)

    } catch (error) {
        console.log(error)
    }
}

if (card) {
    card.addEventListener('click', e => {
        consultar(e)
        location.reload();
        return false;
    });
}

const consultar = e => {
    console.log(e.target)
    console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')) {
        addCart();
    }

    e.stopPropagation()
}

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