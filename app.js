const container=document.querySelector("#grid");
for (let i = 0; i < 16*16; i++) {
    const gridItem =document.createElement('div') ;
    gridItem.classList.add('grid-item');

    container.appendChild(gridItem);
    gridItem.addEventListener('mouseover',changeColor)
}

function changeColor(event) {
 event.target.style.backgroundColor='black'; 
}



