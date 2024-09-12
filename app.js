const container = document.querySelector(".grid-container");
const gridRange = document.getElementById("gridRange")
function createGrid(size) {
    container.innerHTML = ''
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;

for (let i = 0; i < size*size; i++) {
    const gridItem =document.createElement('div') ;
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
    gridItem.addEventListener('mouseover',changeColor)
}
}
createGrid(16);


function changeColor(event) {
    event.target.style.backgroundColor='black'; 
}


gridRange.addEventListener("input", (e) => {
    createGrid(e.target.value)
})
