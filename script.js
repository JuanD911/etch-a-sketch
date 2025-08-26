const grid = document.querySelector(".grid");

function makeGrid(size){
    const cellSize = 500 / size;
    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
    }
}

function clearGrid(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

function paintCell(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    })

}

function resizeGrid(size){
    grid.replaceChildren();
    makeGrid(size);
    paintCell();
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",() => {
    console.log("Grid has been cleared");
    clearGrid();
})

const resizeBtn = document.querySelector(".resize")
const modal = document.querySelector(".modal");
resizeBtn.addEventListener("click",() => {
    console.log("Show modal");
    modal.style.display = "flex";
})

const applyBtn = document.querySelector("#applySize");
applyBtn.addEventListener("click", () => {
    
    const newSize = document.getElementById("gridSize").value;
    const sizeInput = document.getElementById("gridSize");

    if(newSize < 8 || newSize > 100){
        alert("Enter a number between 8 and 100");
        sizeInput.value = "";
    }else{
        console.log("Size applied");
        resizeGrid(newSize);
        modal.style.display = "none";
        sizeInput.value = "";
    }
})


makeGrid(30);
paintCell();