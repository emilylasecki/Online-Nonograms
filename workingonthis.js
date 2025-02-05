document.body.style.backgroundColor = "#f0f8ff";
document.getElementById("myDiv").innerHTML = "hello";
 
class GridSystem {
	constructor(matrix) {
		this.matrix = matrix;
		this.uiContext = this.#getContext(700, 700, "#000");  //put player score and info here
		this.outlineContext = this.#getContext(0, 0, "#444");
		this.topContext = this.#getContext(0, 0, "#111", true);
		this.cellSize = 40;
		this.padding = 2;

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				document.addEventListener("click", this.#updateMatrix([row][col]));
					//#updateMatrix([row][col]);
				console.log("ahfjehg");
	}
}
	}

	#updateMatrix(selectedrow, selectedcol) {
		console.log("updating matrix");

		if (this.matrix[selectedrow][selectedcol] === 0) {
			this.matrix[selectedrow][selectedcol] ===1;
		} else if (this.matrix[selectedrow][selectedcol] ===1) {
			this.matrix[selectedrow][selectedcol] ===0;
		}
		this.render();
	}

	#getCenter(w, h) {
		return {
			x: window.innerWidth / 2 - w / 2 + "px",  // center the canvas
			y: window.innerHeight / 2 - h / 2 + "px"
		};
	}

	#getContext(w, h, color = "#111", isTransparent = false) {  //# makes this private not public
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width = w;
		this.height = this.canvas.height = h;
		this.canvas.style.position = "absolute";
		this.canvas.style.background = color;
		if (isTransparent) {
			this.canvas.style.backgroundColor = "transparent";
		}
		const center = this.#getCenter(w, h);
		this.canvas.style.marginLeft = center.x
		this.canvas.style.marginTop = center.y;
		document.body.appendChild(this.canvas);

		return this.context;
	}

	render() {
		const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding); // area on the outside: blackest black
		const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

		this.outlineContext.canvas.width = w;
		this.outlineContext.canvas.height = h;

		const center = this.#getCenter(w, h);
		this.outlineContext.canvas.style.marginLeft = center.x
		this.outlineContext.canvas.style.marginTop = center.y;

		this.topContext.canvas.style.marginLeft = center.x
		this.topContext.canvas.style.marginTop = center.y;

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				const cellVal = this.matrix[row][col];
				//cellVal.addEventListener("click", clicky());  //better idea here
				let color = "#111"
				
				if (cellVal === 1) {
					color = "#4488FF";
				} else if (cellVal === 2){
					color = "grey";
				}

				this.outlineContext.fillStyle = color;
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);
				//this.outlineContext.addEventListener("click", clicky());

				var button = document.createElement("button");  // in the wrong place
				//this.onclick();
				button.textContent = 'meowdy';
				//button.style.top =absolute;
				//button.style.left=y;
				//button.style.width = 50;
				//button.style.height = 50;
				//this.button.addEventListener("click", onclick())
				this.canvas.appendChild(button);
				//document.body.appendChild(button);
			}
		}

		this.uiContext.font = "20px Courier";
		this.uiContext.fillStyle = "white";
		this.uiContext.fillText("Puzzle #1 - Fish", 20, 30);

		// do check to see if the matricies are equal
	}

	clicky() {
		console.log("meowdy");
	}
}

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



const gridSystem = new GridSystem(workingMatrix);
gridSystem.render();