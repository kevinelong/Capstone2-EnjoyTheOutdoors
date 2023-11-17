
let count = 10

function down(){
    count = count - 1
    console.log(count)
    if(count > 0){
        down();
    }
}

down()

console.log("blastoff");


const board = "...@...c...t..."
//const board ".........@ct..."
const b = board.split("");
console.log(b)
let cp = 3;

pieces = [
    {p:[3,0],symbol:"@"},
    {p:[7,0],symbol:"c"},
    {p:[11,0],symbol:"t"},
]
