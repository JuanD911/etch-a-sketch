const grid = document.querySelector(".grid");

function makeGrid(size){

    const cellSize = 640 / size;

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
    }

}

function clearGrid(){

}

function paintCell(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    })

}


makeGrid(66);
paintCell();