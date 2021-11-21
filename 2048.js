let fieldPlay = document.getElementById ('fieldPlay');
let ctx = fieldPlay.getContext ('2d');
let fieldNumber = document.getElementById ('fieldNumber');
let button = document.getElementById ('button')
let width = fieldPlay.width / fieldNumber.value - 6;
let cell = [];
start ();

console.log (width);

function Cells (row, сolumn) {
    this.value = 0;
    this.x = width;
    this.y = width;
    console.log(x);
}


button.onclick = function() {
    if (fieldNumber.value >= 2 && fieldNumber.value <= 10){
    fieldNumber = fieldNumber.value;
    console.log (fieldNumber);
    }
}



function creatSquare () {
    let i, j;
    for(i = 0; i < fieldNumber; i++) {
        cell[i] = [];
        for(j = 0; j < fieldNumber; j++){
            cell[i][j] = new Cells(i, j);
        }
    }
}
console.log(cell)

function creatAllSquare() {
    let i, j;
    for (i = 0; i < fieldNumber; i++) {
        for (j = 0; j < fieldNumber; j++) {
            drawSquares(Cells[i][j]);
        }
    }
}

function drawSquares (Cells) {
    ctx.beginPath();
    ctx.rect(Cells.x, Cells.y, width, width);
    switch(Cells.value) {
        case 0: ctx.fillStyle = '#9d00ff'; break;
        default: ctx.fillStyle = 51, 0, 255; break;
    }

    
} 


function start() {
    creatSquare()
    creatAllSquare()

}



