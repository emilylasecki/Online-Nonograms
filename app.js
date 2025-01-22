document.addEventListener('DOMContentLoaded', () => {
    // Log to confirm the script is running
    console.log("JavaScript file loaded and executed!");

    // Try to find the #output element
    const outputDiv = document.getElementById('output');

    // Check if the element exists
    if (outputDiv) {
        outputDiv.textContent = "JavaScript is working! 🎉";
        document.body.style.backgroundColor = "#f0f8ff"; // Change background color
        console.log("Content updated successfully.");
    } else {
        console.error("Element with ID 'output' not found in the DOM.");
    }
});

class GridSystem {
	constructor(matrix) {
		this.matrix = matrix;
		this.uiContext = this.#getContext(420, 580, "#000");
		this.outlineContext = this.#getContext(0, 0, "#444");
		this.topContext = this.#getContext(0, 0, "#111", true);
		this.cellSize = 40;
		this.padding = 2;
	}

	#getCenter(w, h) {
		return {
			x: window.innerWidth / 2 - w / 2 + "px",
			y: window.innerHeight / 2 - h / 2 + "px"
		};
	}

	#getContext(w, h, color = "#111", isTransparent = false) {
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
		const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
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
				this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "#4488FF" : "#111";
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);
			}
		}

		this.uiContext.font = "20px Courier";
		this.uiContext.fillStyle = "white";
		this.uiContext.fillText("Nonogram Grid", 20, 30);
	}
}

const gridMatrix = [
	[1, 1, 1, 1],
	[1, 0, 0, 0],
	[1, 0, 1, 0],
	[1, 0, 0, 0]
];

const gridSystem = new GridSystem(gridMatrix);
gridSystem.render();