document.body.style.backgroundColor = "#F8F8FF";


var workingMatrix = [ 
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

// cat
// --------------------------------------------------------------------------------------------
const CatsolMatrix = [  // solution to the puzzle
	[1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
	[1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	[1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
];

const CatrowClues  = [
	[0,0,3,3],
	[1,1,1,1],
	[0,2,4,2],
	[0,0,0,6],
	[0,1,2,1],
	[0,0,4,4],
	[0,0,0,6],
	[0,0,0,10],
	[0,0,0,4],
	[0,0,0,6],
]

const CatcolClues = [
	[0,3,1,1],
	[1,1,1,1],
	[0,1,5,1],
	[0,0,3,5],
	[0,0,3,4],
	[0,0,3,4],
	[0,0,3,5],
	[0,1,5,1],
	[1,1,1,1],
	[0,3,1,1],

]

// dog puzzle
// --------------------------------------------------------------------------------------------------
const DogsolMatrix = [  // solution to the puzzle
	[0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
	[0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
];

const DogrowClues  = [
	[1,1,4],
	[2,1,1],
	[0,4,1],
	[0,2,1],
	[0,0,7],
	[0,0,7],
	[0,4,2],
	[0,2,1],
	[0,2,1],
	[0,2,1],
]

const DogcolClues = [
	[0,1],
	[0,3],
	[0,9],
	[1,8],
	[0,3],
	[0,3],
	[2,2],
	[1,3],
	[1,7],
	[0,3],

]

// fish
// ----------------------------------------------------------------------------------------------------

const FishsolMatrix = [  // solution to the puzzle
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
];

const FishrowClues  = [
	[0,1],
	[0,2],
	[2,1],
	[4,2],
	[6,1],
	[2,6],
	[0,9],
	[6,1],
	[3,2],
	[2,1],
]

const FishcolClues = [
	[0,0,2],
	[0,0,4],
	[0,1,2],
	[0,0,6],
	[0,0,7],
	[0,0,9],
	[1,5,1],
	[0,1,2],
	[0,0,6],
	[0,2,2],

]

// penguin
// -------------------------------------------------------------------------------------------------

const PenguinsolMatrix = [  // solution to the puzzle
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
];

const PenguinrowClues  = [
	[0,0,0,' 0'],
	[0,0,0,4],
	[0,1,2,1],
	[1,1,1,1],
	[0,1,2,1],
	[0,2,2,2],
	[0,0,3,3],
	[0,0,4,4],
	[0,0,3,3],
	[0,0,3,3],
]

const PenguincolClues = [
	[0,0,3],
	[0,0,7],
	[0,1,5],
	[1,1,2],
	[0,2,2],
	[0,2,2],
	[1,1,2],
	[0,1,5],
	[0,0,7],
	[0,0,3],

]

// camel
// -----------------------------------------------------------------

const CamelsolMatrix = [  // solution to the puzzle
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const CamelrowClues  = [
    [0,' 0'],
	[0,3],
	[0,2],
	[2,3],
	[2,3],
	[0,7],
	[0,6],
	[0,6],
	[0,8],
	[0,' 0'],
]

const CamelcolClues = [
	[0,0,' 0'],
	[1,3,1],
	[0,6,1],
	[0,2,4],
	[0,0,4],
	[0,0,6],
	[0,0,6],
	[0,0,6],
	[0,0,2],
	[0,0,' 0'],

]

const BeetlesolMatrix = [  // solution to the puzzle
	[0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
];

const BeetlerowClues  = [
    [0,0,0,6],
	[0,0,0,2],
	[0,0,0,4],
	[0,0,1,1],
	[1,1,1,1],
	[0,0,0,8],
	[0,0,1,1],
	[0,0,0,6],
	[0,0,2,2],
	[0,1,4,1],
]

const BeetlecolClues = [
    [0,0,0,1,1],
	[0,0,0,1,1],
    [0,0,0,1,5],
	[1,2,1,1,1],
	[0,3,1,1,1],
	[0,3,1,1,1],
	[1,2,1,1,1],
	[0,0,0,1,5],
	[0,0,0,1,1],
	[0,0,0,1,1],

]

// -------------------------------------

const BeeSolMatrix = [ 
	[0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
]


const BeerowClues  = [
	[0,0,0,2],
	[0,0,1,1],
	[0,0,4,1],
	[0,1,1,2],
	[0,1,1,2],
	[1,1,1,3],
	[0,1,1,2],
	[0,2,1,2],
	[0,1,1,2],
	[0,0,0,6],
]

const BeecolClues = [
	[0,0,5],
	[1,1,1],
	[1,1,1],
	[0,1,1],
	[0,2,2],
	[2,4,1],
	[1,1,2],
	[0,1,6],
	[0,2,4],
	[0,0,1],

]


// ---------------------------------------------- 
// Lion

const LionsolMatrix = [ 
	[1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
]

const LionrowClues  = [
	[2,4],
	[4,1],
	[1,2],
	[0,1],
	[2,3],
	[1,3],
	[0,2],
	[3,4],
	[2,5],
	[0,5],
]

const LioncolClues = [
	[0,2,2],
	[0,2,2],
	[0,1,1],
	[0,2,2],
	[1,1,2],
	[1,1,3],
	[0,1,6],
	[0,0,9],
	[1,2,3],
	[0,0," 0"],

]

// crow
// ------------------------------------------------------------

const CrowSolMatrix = [ 
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
]

const CrowrowClues  = [
    [0,' 0'],
	[0,3],
	[1,2],
	[0,5],
	[0,6],
	[0,8],
	[0,7],
	[0,7],
	[2,2],
	[1,2],
]

const CrowcolClues = [
	[0,0,3],
	[0,0,4],
	[0,0,3],
	[0,0,4],
	[0,0,5],
	[0,0,6],
	[0,0,9],
	[1,4,1],
	[0,0,5],
	[0,0,1],

]

// ----------------------------
// Goat


const GoatSolMatrix = [ 
	[1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
	[1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
]


const GoatrowClues  = [
	[0,0,4,4],
	[0,1,4,1],
	[1,1,1,1],
	[0,0,2,2],
	[0,0,3,1],
	[0,0,1,1],
	[0,1,2,1],
	[0,0,1,2],
	[0,0,1,2],
	[0,0,2,1],
]

const GoatcolClues = [
	[0,3,1],
	[0,1,1],
	[0,1,5],
	[2,1,2],
	[1,1,1],
	[1,1,1],
	[2,1,2],
	[0,1,8],
	[0,0,1],
	[0,0,3],

]

var colClues = CatcolClues;
var rowClues = CatrowClues;
var solMatrix = CatsolMatrix;
const WinChecker = document.getElementById("WinChecker");

function catLevel() {
    deleteGrid();
    colClues = CatcolClues;
    rowClues = CatrowClues;
    solMatrix = CatsolMatrix;
    puzzlename = "You win! Level 1: Cat"
    level = "Level 1"
  //  console.log("cat selected");
    WinChecker.textContent = level;
    loadGrid();
}

function dogLevel() {
    deleteGrid();
    colClues =DogcolClues;
    rowClues = DogrowClues;
    solMatrix = DogsolMatrix;
    puzzlename = "You win! Level 2: Dog"
    level = "Level 2"
  //  console.log("dog selected");
    WinChecker.textContent = level;
    loadGrid();
}

function fishLevel() {
    deleteGrid();
    colClues =FishcolClues;
    rowClues = FishrowClues;
    solMatrix = FishsolMatrix;
    puzzlename = "You win! Level 3: Fish"
    level = "Level 3"
    WinChecker.textContent = level;
    loadGrid();
}

function penguinLevel() {
    deleteGrid();
    colClues =PenguincolClues;
    rowClues = PenguinrowClues;
    solMatrix = PenguinsolMatrix;
    puzzlename = "You win! Level 4: Penguin"
    level = "Level 4"
    WinChecker.textContent = level;
    loadGrid();
}

function CamelLevel() {
    deleteGrid();
    colClues =CamelcolClues;
    rowClues = CamelrowClues;
    solMatrix = CamelsolMatrix;
    puzzlename = "You win! Level 5: Camel"
    level = "Level 5"
    WinChecker.textContent = level;
    loadGrid();
}

function BeetleLevel() {
    deleteGrid();
    colClues =BeetlecolClues;
    rowClues = BeetlerowClues;
    solMatrix = BeetlesolMatrix;
    puzzlename = "You win! Level 6: Beetle"
    level = "Level 6"
    WinChecker.textContent = level;
    loadGrid();
}

function BeeLevel() {
    deleteGrid();
    colClues =BeecolClues;
    rowClues = BeerowClues;
    solMatrix = BeeSolMatrix;
    puzzlename = "You win! Level 7: Bee"
    level = "Level 7"
    WinChecker.textContent = level;
    loadGrid();
}

function LionLevel() {
    deleteGrid();
    colClues =LioncolClues;
    rowClues = LionrowClues;
    solMatrix = LionsolMatrix;
    puzzlename = "You win! Level 8: Lion"
    level = "Level 8"
    WinChecker.textContent = level;
    loadGrid();
}

function CrowLevel() {
    deleteGrid();
    colClues =CrowcolClues;
    rowClues = CrowrowClues;
    solMatrix = CrowSolMatrix;
    puzzlename = "You win! Level 9: Crow"
    level = "Level 9"
    WinChecker.textContent = level;
    loadGrid();
}

function GoatLevel() {
    deleteGrid();
    colClues =GoatcolClues;
    rowClues = GoatrowClues;
    solMatrix = GoatSolMatrix;
    puzzlename = "You win! Level 10: Goat"
    level = "Level 10"
    WinChecker.textContent = level;
    loadGrid();
}

puzzlename = "You win! Level 1: Cat"
level = "Level 1"
WinChecker.textContent = level;
const column = document.getElementById("col2");
const cluerow = document.getElementById("col1");
const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

loadGrid()

const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const header3 = document.getElementById("header3");
const header4 = document.getElementById("header4");
const header5 = document.getElementById("header5");
const header6 = document.getElementById("header6");
const header7 = document.getElementById("header7");
const header8 = document.getElementById("header8");
const header9 = document.getElementById("header9");
const header10 = document.getElementById("header10");
const clearGrid1 = document.getElementById("clearGrid1");


const button1 = document.createElement("button");
button1.textContent = "Clear Grid";
button1.classList.add("clearGrid");
button1.addEventListener("click", cleargrid);
clearGrid1.appendChild(button1);

const catlevelB = document.createElement("button");
catlevelB.textContent = "Level 1";
catlevelB.classList.add("levelStyle");
catlevelB.addEventListener("click", catLevel);
header1.appendChild(catlevelB);

const doglevelB = document.createElement("button");
doglevelB.textContent = "Level 2";
doglevelB.classList.add("levelStyle");
doglevelB.addEventListener("click", dogLevel);
header2.appendChild(doglevelB);

const fishlevelB = document.createElement("button");
fishlevelB.textContent = "Level 3";
fishlevelB.classList.add("levelStyle");
fishlevelB.addEventListener("click", fishLevel);
header3.appendChild(fishlevelB);

const penguinlevelB = document.createElement("button");
penguinlevelB.textContent = "Level 4";
penguinlevelB.classList.add("levelStyle");
penguinlevelB.addEventListener("click", penguinLevel);
header4.appendChild(penguinlevelB);

const camellevelB = document.createElement("button");
camellevelB.textContent = "Level 5";
camellevelB.classList.add("levelStyle");
camellevelB.addEventListener("click", CamelLevel);
header5.appendChild(camellevelB);

const beetlelevelB = document.createElement("button");
beetlelevelB.textContent = "Level 6";
beetlelevelB.classList.add("levelStyle");
beetlelevelB.addEventListener("click", BeetleLevel);
header6.appendChild(beetlelevelB);

const beelevelB = document.createElement("button");
beelevelB.textContent = "Level 7";
beelevelB.classList.add("levelStyle");
beelevelB.addEventListener("click", BeeLevel);
header7.appendChild(beelevelB);

const lionlevelB = document.createElement("button");
lionlevelB.textContent = "Level 8";
lionlevelB.classList.add("levelStyle");
lionlevelB.addEventListener("click", LionLevel);
header8.appendChild(lionlevelB);

const crowlevelB = document.createElement("button");
crowlevelB.textContent = "Level 9";
crowlevelB.classList.add("levelStyle");
crowlevelB.addEventListener("click", CrowLevel);
header9.appendChild(crowlevelB);

const goatlevelB = document.createElement("button");
goatlevelB.textContent = "Level 10";
goatlevelB.classList.add("levelStyle");
goatlevelB.addEventListener("click", GoatLevel);
header10.appendChild(goatlevelB);


// createboxes in the dead space between the 2 clues so everything lines up
function loadGrid() {
colCluesNumber = colClues[0].length;
rowCluesNumber = rowClues[0].length;

for (i=0; i<colCluesNumber; i++){ 
    cluerow.appendChild(document.createElement("br"));
    for (j=0; j<rowCluesNumber; j++) {
        const button = document.createElement("button");
        button.id = "blank" +j + '' + i;
        button.textContent = "X";
        button.style.color= "#F8F8FF";
        button.style.backgroundColor="#F8F8FF";
        button.classList.add("buttonInactive");
        button.style.borderColor="lightgrey"; // comment out if don't like
        cluerow.appendChild(button);
    }
}


// row clues
for (var m=0; m<10; m++) {
    cluerow.appendChild(document.createElement("br"));
    for (var k =0; k<rowCluesNumber; k++) {
        const button = document.createElement("button");
        button.id = "rowcol0" + k;
        button.textContent = rowClues[m][k];
        button.style.color= "black";
        button.style.borderColor="lightgrey";  //comment out if don't like
        if (button.textContent == "0") {
            button.style.color = "#F8F8FF";
        }
        button.style.backgroundColor="#F8F8FF";
        button.classList.add("buttonInactive");
        cluerow.appendChild(button);
    }
}

//column clues
for (var m=0; m<colCluesNumber; m++) {
    column.appendChild(document.createElement("br"));
    for (var k =0; k<10; k++) {
        const button = document.createElement("button");
        button.id = "cluecol0" + k;
        button.style.color= "black";
        button.textContent = colClues[k][m];
        if (button.textContent == "0") {
            button.style.color = "#F8F8FF";
        }
       button.style.borderColor="lightgrey";  //comment out if don't like
        button.style.backgroundColor="#F8F8FF";
        button.classList.add("colInactive");
        column.appendChild(button);
    }
}


// entire grid
for (var i =0; i<buttonNames.length; i++) {
    column.appendChild(document.createElement("br"));
    for (var j=0; j<buttonNames.length; j++) {
        const button = document.createElement("button");
        button.id = "cell" +i +j; // adds position so can be referred to in other places
        button.textContent = 'X';
        button.classList.add("resize-button");
        button.style.color= "darkgrey";
        button.style.borderColor="#333";
        button.addEventListener('click', () => {
            if (button.style.backgroundColor == "darkgrey") {
                button.style.backgroundColor = "black";
                button.style.color= "black";
                var x = (button.id).slice(-1);
                   var y = (button.id).slice(-2, -1);
                 //  console.log(x + " " + y);
                   workingMatrix[y][x] = 1;
                   checkWin()
                } else if (button.style.backgroundColor == "black") {
                   var x = (button.id).slice(-1);
                   var y = (button.id).slice(-2, -1);
                  // console.log(x + " " + y);
                   workingMatrix[y][x] = 0;
                   checkWin()
                   button.style.backgroundColor="grey";
                   button.style.color= "black";
               } else {
                   button.style.backgroundColor="darkgrey";
                   button.style.color= "darkgrey";
               }
        });
        button.style.backgroundColor = "darkgrey";

        button.onclick = function(el) {
            const li = document.createElement('li');
    }
    column.appendChild(button);
    
}
}

}
function checkWin() {
count = 0;
for (var i =0; i<buttonNames.length; i++) {
    for (var j=0; j<buttonNames.length; j++) {
        if (workingMatrix[i][j] != solMatrix[i][j]) {
            count = count +1;
            continue;
        }
    }
}
// console.log(count)
 if (count == 0) {
  //  console.log("you win!")
    WinChecker.textContent = puzzlename;
    for (var i =0; i<buttonNames.length; i++) {
        for (var j=0; j<buttonNames.length; j++) {
          //  newbutton = document.getElementById("cell"+ i +'' +j);
            document.getElementById("cell"+ i +'' +j).disabled = true; 

            }
        }
    }
}


function cleargrid() {
    document.getElementById("myDiv").innerHTML=level;
    WinChecker.textContent = level;
    for (var i =0; i<buttonNames.length; i++) {
        for (var j=0; j<buttonNames.length; j++) {
            workingMatrix[i][j] = 0;
            newbutton = document.getElementById("cell" +i +""+j);
            newbutton.style.backgroundColor = "darkgrey";
            newbutton.style.color ="darkgrey";
            document.getElementById("cell"+ i +'' +j).disabled = false; 
}
    }
}

function deleteGrid() {
    for (var i =0; i<buttonNames.length; i++) {
        try {
            brElement = document.querySelector('br');
            brElement.remove();
        } catch (error) {
            console.log(error)
        }
        for (var j=0; j<buttonNames.length; j++) {
            workingMatrix[i][j] = 0;
            newbutton = document.getElementById("cell" +i +""+j);
            newbutton.remove();
            }
        }
    for (i=0; i<colCluesNumber; i++){   
        try {
            brElement = document.querySelector('br');
            brElement.remove();
        } catch (error) {
            console.log(error);
        }
        for (j=0; j<rowCluesNumber; j++) {
            newbutton = document.getElementById("blank" + j +""+i);
            newbutton.remove();
            }
        }
    for (var m=0; m<10; m++) {
        try {
            brElement = document.querySelector('br');
            brElement.remove();
        } catch (error) {
            console.log(error);
        }
        for (var k =0; k<rowCluesNumber; k++) {
            newbutton = document.getElementById("rowcol0" + k);
            newbutton.remove();
            }
        }
    for (var m=0; m<colCluesNumber; m++) {
        try {
            brElement = document.querySelector('br');
            brElement.remove();
        } catch (error) {
            console.log(error); 
        }
        for (var k =0; k<10; k++) {
            newbutton = document.getElementById("cluecol0"+ k);
            newbutton.remove();
            }
        }
}