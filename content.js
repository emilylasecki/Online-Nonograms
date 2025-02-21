// current issues:

// make colors more appealing
// make the border size and text size shift so that everything still looks nice on small screens
// win condition checker
// define imports so that multiple levels can be selected
// come up with method to toggle between levels
// readme
// info on page about nonograms and how to play
// level difficulty rating?
// figure out how to get on itch.io


document.body.style.backgroundColor = "#F8F8FF"//"#f0f8ff";

//const {colClues, rowClues, solMatrix} = require('./puzzles/penguin.js');
/*
import('./puzzles/penguin.js').then(({ colClues, rowClues, solMatrix }) => {
    console.log(colClues, rowClues, solMatrix);
    const colClues = colClues;
}); */
/*
async function getMatrices() { 
    const module = await import('./puzzles/penguin.js');
    return module;
}

(async () => {
    const { colClues, rowClues, solMatrix } = await getMatrices();
    console.log('Now matrices are available:', colClues, rowClues, solMatrix);
})(); */

//import {colClues} from './puzzles/penguin.js';


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

const solMatrix = [  // solution to the puzzle
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

const rowClues  = [
	[0,0,0,0],
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

const colClues = [
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


/*import {solMatrix} from './puzzles/penguin.js'
import {rowClues} from './puzzles/penguin.js'
import {colClues} from './puzzles/penguin.js' */




colCluesNumber = colClues[0].length;
rowCluesNumber = rowClues[0].length;

document.getElementById("myDiv").innerHTML = "=ōwō=";
const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const column = document.getElementById("col2");
const cluerow = document.getElementById("col1");

// createboxes in the dead space between the 2 clues so everything lines up
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
        button.id = "cluecol0" + k;
        button.textContent = rowClues[m][k];
        button.style.color= "black";
        if (button.textContent == "0") {
            button.style.color = "#F8F8FF";
        }
        button.style.backgroundColor="#F8F8FF";
        button.classList.add("buttonInactive");
       // button.style.borderColor="#F8F8FF";
      //  console.log(k);
        //cluerow.appendChild(document.createElement("br"));
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
      //  button.style.borderColor="#F8F8FF";
        //console.log(k);
        //cluerow.appendChild(document.createElement("br"));
        column.appendChild(button);
    }
}


// entire grid
for (var i =0; i<buttonNames.length; i++) {
    column.appendChild(document.createElement("br"));
   // document.getElementById("myDiv").innerHTML = "=ōwō=";
    for (var j=0; j<buttonNames.length; j++) {
        const button = document.createElement("button");
        button.id = "cell" +i +j; // adds position so can be referred to in other places
        button.textContent = 'X';
       // button.style.borderBlockColor = "darkgrey";
        button.classList.add("resize-button");
       // button.style.borderInlineColor = "darkgrey";
        button.style.color= "darkgrey";
      //  button.style.width = "30px";
      //  button.style.height= "30px";
        button.addEventListener('click', () => {
            if (button.style.backgroundColor == "darkgrey") {
                button.style.backgroundColor = "black";
                button.style.color= "black";
              //  button.style.borderInlineColor = "black";
               // button.style.borderBlockColor = "black";
                var x = (button.id).slice(-1);
                   var y = (button.id).slice(-2, -1);
                   console.log(x + " " + y);
                   workingMatrix[y][x] = 1;
                   checkWin()
               // console.log(button.id);  // can use button.id to get index
                // get the index m and n for the matrix
                } else if (button.style.backgroundColor == "black") {
                   var x = (button.id).slice(-1);
                   var y = (button.id).slice(-2, -1);
                   console.log(x + " " + y);
                   workingMatrix[y][x] = 0;
                   checkWin()
                   button.style.backgroundColor="grey";
                   button.style.color= "black";
                  // button.style.borderInlineColor = "grey";
                  // button.style.borderBlockColor = "grey";
               } else {
                   button.style.backgroundColor="darkgrey";
                   button.style.color= "darkgrey";
                  // button.style.borderInlineColor = "darkgrey";
                  // button.style.borderBlockColor = "darkgrey";
               }
        });
        button.style.backgroundColor = "darkgrey";

        button.onclick = function(el) {
            const li = document.createElement('li');
    }
    column.appendChild(button);
    
}

}
function checkWin() {
count = 0;
for (var i =0; i<buttonNames.length; i++) {
    for (var j=0; j<buttonNames.length; j++) {
        if (workingMatrix[i][j] != solMatrix[i][j]) {
            count = count +1;
           // console.log("still solving");
            continue;
        }
    }
    // do something here for when everything matches
}
 console.log(count)
 if (count == 0) {
    console.log("you win!")
    document.getElementById("myDiv").innerHTML="You Win!";
 }
}

// issue now is how to check for win status?
// extract the index of each cell and compare to the solution