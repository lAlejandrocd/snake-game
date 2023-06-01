const board_border = 'black';
const board_background = 'white';
const snake_col = 'red';
const snake_border = 'darkblue';

// The Y-coordinate for all parts is always 200. The x-coordinate is at decrement of 10 to represent different parts of the snake's body. The very first coordinate represent the snake's head.
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 }
];

// get Canvas element.
const snakeBoard = document.getElementById('snakeBoard');

// Give context to id meanwhile we gonna drive in 2d.
const snakeBoard_ctx = snakeBoard.getContext('2d');

// Start game
main();

// Function Start game
function main() {
  clearCanvas();
  drawSnake();

}

// Function draw a border around the canvas
function clearCanvas() {
  // Select the colour to fill the drawing.
  snakeBoard_ctx.fillStyle = board_background;
  // Select the colour for the border of the canvas.
  snakeBoard_ctx.strokeStyle = board_border;

  // Draw a filled rectangle to cover the entire canvas.
  snakeBoard_ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  // Draw around the border canvas
  snakeBoard_ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);

}


// Function that prints the parts.
function drawSnake() {
  snake.forEach(drawSnakePart);
}

// Making the snake. We gonna making a context pudding the inicial location of our snake on the canvas using an array of coordinates.

// The number of coordinates in the object will be equal to the length of the snake


// Function to draw an rectangle for each pair of coordinates.
function drawSnakePart(snakePart) {

  // Set the colour of the snake part
  snakeBoard_ctx.fillStyle = snake_col;
  // Set the border colour of the snake part
  snakeBoard_ctx.strokestyle = snake_border;
  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  // Draw a border around the snake part
  snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}