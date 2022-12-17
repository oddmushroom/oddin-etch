const grid = document.querySelector('.grid');
let gridDim = 16;

function crearDiv(dim) {
    const div = document.createElement('div');
    div.classList.add('cuadrados');
    div.style.width = `${dim}px`;
    div.style.height = `${dim}px`;
    return div;
}

function crearGrid(gridDim) {
    for(let i=0; i < gridDim; i++){
        for(let j=0; j < gridDim; j++){
            grid.appendChild(crearDiv(grid.clientWidth/gridDim));
        }
    }
}

grid.addEventListener('mouseover', function (c) {
    if (c.target.matches('.cuadrados')) {
        c.target.classList.add('cursor');
    }
})

crearGrid(gridDim);