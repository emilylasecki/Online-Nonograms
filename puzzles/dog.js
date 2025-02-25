const solMatrix = [  // solution to the puzzle
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

rowClues  = [
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

colClues = [
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