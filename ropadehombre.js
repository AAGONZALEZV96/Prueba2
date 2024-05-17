document.addEventListener('DOMContentLoaded', function() { 
//DOM Listoko
obtenerRopaHombre();
});

async function obtenerRopaHombre(){
    const url = "https://fakestoreapi.com/products/category/men's%20clothing";
    try {
        const ArrayProductos = await fetch(url);
        const ArrayProductosJSON = await ArrayProductos.json();
        console.log(ArrayProductosJSON);
        recorreEInsertaProductos(ArrayProductosJSON)
    }
    catch (error) {
        console.log(error)
        //crearPaginadeError();
    }
}; 

function recorreEInsertaProductos(ArrayProductos){
    const ropita = document.getElementById('ropita');
    ArrayProductos.forEach(Producto => {
        const card = CrearTarjetasProductos(Producto);
        ropita.appendChild(card);
        
    });
}





function CrearTarjetasProductos(Producto){
    const divCol = document.createElement('div');
    divCol.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-3');
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('img');
    img.setAttribute('src', Producto.image);
    img.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = Producto.title;
    const p = document.createElement('p');
    p.textContent = Producto.price
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('btn', 'btn-primary');
    a.textContent = 'Añadir al carrito';

    divCol.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);

    return divCol;
};