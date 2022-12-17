const grid = document.querySelector('.grid');
const DimUsuario = document.querySelector('.boton');
let gridDim = 16;

crearGrid(gridDim);

function crearDiv(dim) {
    const div = document.createElement('div');
    div.classList.add('cuadrados');
    div.style.width = `${dim}px`;
    div.style.height = `${dim}px`;
    return div;
}

function crearGrid(gridDim) {
if(gridDim <= 100){
    for(let i=0; i < gridDim; i++){
        for(let j=0; j < gridDim; j++){
            grid.appendChild(crearDiv(grid.clientWidth/gridDim));
        }
    }
} else {resetear();
crearGrid(16);}
}

DimUsuario.addEventListener('click', () => {
   let nuevoInput = prompt('Ingrese la dimension deseada: ');
   resetear();
   crearGrid(nuevoInput);
})

function resetear() {
    while(grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

grid.addEventListener('mouseover', function (c) {
    if (c.target.matches('.cuadrados')) {
        c.target.classList.add('cursor');
    }
})

boton.addEventListener('click', () => {
    let nuevoInput = prompt('Ingrese la dimension deseada: ');
    resetear();
    crearGrid(nuevoInput);
 })