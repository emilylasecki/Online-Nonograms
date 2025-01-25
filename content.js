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
				//this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "#4488FF" : "#111"; // fill color based on status of the matrix 
				//this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				//row * (this.cellSize + this.padding),
				//this.cellSize, this.cellSize);
				const cellVal = this.matrix[row][col];
				let color = "#111"

				if (cellVal === 1) {
					color = "blue";
				} else if (cellVal === 0){
					color = "grey";
				}

				this.outlineContext.fillStyle = color;
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);
			}
		}

		this.uiContext.font = "20px Courier";
		this.uiContext.fillStyle = "white";
		this.uiContext.fillText("Puzzle #1 - Fish", 20, 30);

		// do check to see if the matricies are equal
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

workingMatrix = [  // current input by the user
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
class updateGrid {

	changeCellState(workingMatrix) {  //can we just call render again? update the working matrix and pass it to render again.
	this.matrix = workingMatrix
	for (let row = 0; row < this.matrix.length; row ++) {
		for (let col = 0; col < this.matrix[row].length; col ++) {
			this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "#4488FF" : "#111"; // fill color based on status of the matrix 
			this.outlineContext.fillRect(col * (this.cellSize + this.padding),
			row * (this.cellSize + this.padding),
			this.cellSize, this.cellSize);
		}
}
}
}

//workingMatrix.addEventListener("onclick", changeCellState) 

const gridSystem = new GridSystem(workingMatrix);
gridSystem.render();