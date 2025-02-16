document.body.style.backgroundColor = "#F8F8FF"//"#f0f8ff";


const solMatrix = [  // solution to the puzzle
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
];

workingMatrix = [  // current input by the user might not use
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
]

rowClues  = [
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

colClues = [
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


// systematically extract these numbers?
rowCluesNum = 3;  //change this to the number of cols in row clues
colCluesNum =2;

document.getElementById("myDiv").innerHTML = "=ōwō=";
const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const column = document.getElementById("col2");
const cluerow = document.getElementById("col1");

for (i=0; i<rowCluesNum; i++){  // createboxes in the dead space between the 2 clues so everything lines up
    cluerow.appendChild(document.createElement("br"));
    for (j=0; j<colCluesNum; j++) {
        const button = document.createElement("button");
        button.id = "blank" +j + '' + i;
        button.textContent = "X";
        button.style.color= "grey";
        button.style.backgroundColor="grey";
        button.classList.add("buttonInactive");
        button.style.borderColor="grey";
        cluerow.appendChild(button);
    }
}


// column clues
for (var m=0; m<10; m++) {
    cluerow.appendChild(document.createElement("br"));
    for (var k =0; k<colCluesNum; k++) {
        const button = document.createElement("button");
        button.id = "cluecol0" + k;
        button.textContent = rowClues[m][k];
        button.style.color= "black";
        if (button.textContent == "0") {
            button.style.color = "grey";
        }
        button.style.backgroundColor="grey";
        button.classList.add("buttonInactive");
        button.style.borderColor="grey";
        console.log(k);
        //cluerow.appendChild(document.createElement("br"));
        cluerow.appendChild(button);
    }
}

//row clues
for (var m=0; m<rowCluesNum; m++) {
    column.appendChild(document.createElement("br"));
    for (var k =0; k<10; k++) {
        const button = document.createElement("button");
        button.id = "cluecol0" + k;
        button.style.color= "black";
        button.textContent = colClues[k][m];
        if (button.textContent == "0") {
            button.style.color = "grey";
        }
        button.style.backgroundColor="grey";
        button.classList.add("colInactive");  //colInactive
        button.style.borderColor="grey";
        console.log(k);
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
        button.style.borderBlockColor = "darkgrey";
        button.classList.add("resize-button");
        button.style.borderInlineColor = "darkgrey";
        button.style.color= "darkgrey";
      //  button.style.width = "30px";
      //  button.style.height= "30px";
        button.addEventListener('click', () => {
            if (button.style.backgroundColor == "darkgrey") {
                button.style.backgroundColor = "black";
                button.style.color= "black";
                button.style.borderInlineColor = "black";
                button.style.borderBlockColor = "black";
                console.log(button.id);  // can use button.id to get index
                // get the index m and n for the matrix
                } else if (button.style.backgroundColor == "black") {
                   button.style.backgroundColor="grey";
                   button.style.color= "black";
                   button.style.borderInlineColor = "grey";
                   button.style.borderBlockColor = "grey";
               } else {
                   button.style.backgroundColor="darkgrey"; //SeaShell is a contender
                   button.style.color= "darkgrey";
                   button.style.borderInlineColor = "darkgrey";
                   button.style.borderBlockColor = "darkgrey";
               }
        });
        button.style.backgroundColor = "darkgrey";

        button.onclick = function(el) {
            const li = document.createElement('li');
    }
    column.appendChild(button);
    
}

}


// do some loopy boi to display a lot of these friends and toggle the corresponding one
// issue now is how to check for win status?
// extract the index of each cell and compare to the solution