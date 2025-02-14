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

const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
var br = document.createElement("br");
for (var i =0; i<buttonNames.length; i++) {
    document.body.appendChild(document.createElement("br"));
    document.getElementById("myDiv").innerHTML = "=ōwō=";
    for (var j=0; j<buttonNames.length; j++) {
        document.getElementById("meow").innerHTML = rowClues[0][0] + "" + rowClues[0][1]; //vertical text
        const button = document.createElement("button");
        button.id = "cell" +i +j; // adds position so can be referred to in other places
        button.textContent = 'X';
        button.style.borderBlockColor = "darkgrey";
        button.style.borderInlineColor = "darkgrey";
        button.style.color= "darkgrey";
        button.style.width = "40px";
        button.style.height= "40px";
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
    document.body.appendChild(button);
}

}







// do some loopy boi to display a lot of these friends and toggle the corresponding one
// issue now is how to check for win status?
// will ponder this and come back with answers