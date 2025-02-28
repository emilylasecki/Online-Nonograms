// current to do:

// make colors more appealing

// win condition checker - make visually better?
// define imports so that multiple levels can be selected - put all in this file

// readme
// info on page about nonograms and how to play
// level difficulty rating?
// figure out how to get on itch.io
// maybe run on github pages?
// make toggle between levels look nice
// fix bug where selecting a different puzzle makes it creep down the page



document.body.style.backgroundColor = "#F8F8FF"//"#f0f8ff";


var workingMatrix = [  // current input by the user might not use
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

var colClues = CatcolClues;
var rowClues = CatrowClues;
var solMatrix = CatsolMatrix;

function catLevel() {
    deleteGrid();
    colClues = CatcolClues;
    rowClues = CatrowClues;
    solMatrix = CatsolMatrix;
    console.log("cat selected");
    loadGrid();
}

function dogLevel() {
    deleteGrid();
    colClues =DogcolClues;
    rowClues = DogrowClues;
    solMatrix = DogsolMatrix;
    puzzlename = "You win! Level 2: Dog"
    level = "Level 2"
    console.log("dog selected");
    loadGrid();
}

puzzlename = "You win! Level 1: Cat"
level = "Level 1"
const column = document.getElementById("col2");
const cluerow = document.getElementById("col1");
const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

loadGrid()

const button1 = document.createElement("button");
button1.textContent = "Clear Grid";
button1.addEventListener("click", cleargrid);

const catlevelB = document.createElement("button");
catlevelB.textContent = "Level 1";
catlevelB.addEventListener("click", catLevel);

const doglevelB = document.createElement("button");
doglevelB.textContent = "Level 2";
doglevelB.addEventListener("click", dogLevel);


document.body.appendChild(doglevelB);
document.body.appendChild(catlevelB);
document.body.appendChild(button1);
// createboxes in the dead space between the 2 clues so everything lines up
function loadGrid() {
document.getElementById("myDiv").innerHTML = level;
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
        //button.style.borderColor="#F8F8FF";
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
        button.addEventListener('click', () => {
            if (button.style.backgroundColor == "darkgrey") {
                button.style.backgroundColor = "black";
                button.style.color= "black";
                var x = (button.id).slice(-1);
                   var y = (button.id).slice(-2, -1);
                   console.log(x + " " + y);
                   workingMatrix[y][x] = 1;
                   checkWin()
                } else if (button.style.backgroundColor == "black") {
                   var x = (button.id).slice(-1);
                   var y = (button.id).slice(-2, -1);
                   console.log(x + " " + y);
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
    console.log("you win!")
    document.getElementById("myDiv").innerHTML=puzzlename;
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
        for (var j=0; j<buttonNames.length; j++) {
            workingMatrix[i][j] = 0;
            newbutton = document.getElementById("cell" +i +""+j);
            newbutton.remove();
            }
        }
    for (i=0; i<colCluesNumber; i++){        
        for (j=0; j<rowCluesNumber; j++) {
            newbutton = document.getElementById("blank" + j +""+i);
            newbutton.remove();

    
            }
        }
    for (var m=0; m<10; m++) {
        for (var k =0; k<rowCluesNumber; k++) {
            newbutton = document.getElementById("rowcol0" + k);
            newbutton.remove();
            }
        }
    for (var m=0; m<colCluesNumber; m++) {
        for (var k =0; k<10; k++) {
            newbutton = document.getElementById("cluecol0"+ k);
            newbutton.remove();
            }
        }
}