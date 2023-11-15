/* 
   Filename: SophisticatedCode.js

   Description: This code generates a complex and elaborate animated 
   visualization of a fractal pattern using JavaScript and HTML5 canvas. 
   The Fractal pattern is based on Mandelbrot set. 

   Authors: [Your Name]

   Date: [Current Date]
*/

// Variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 800;
const canvasHeight = 800;
const MAX_ITERATIONS = 500;
const ZOOM_FACTOR = 0.75;
const INITIAL_X_OFFSET = -2.0;
const INITIAL_Y_OFFSET = -1.5;
const COLORS = [
  "#000000",
  "#111111",
  "#222222",
  "#333333",
  // ... More color values ...
  "#FFFFFF",
];

// Functions

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

// Function to calculate the color for a specific iteration
function calculateColor(iteration) {
  const colorIndex = Math.floor(iteration / (MAX_ITERATIONS / COLORS.length));
  return COLORS[colorIndex];
}

// Function to draw the Mandelbrot set
function drawMandelbrot() {
  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      const a = (x / canvasWidth) * ZOOM_FACTOR + INITIAL_X_OFFSET;
      const b = (y / canvasHeight) * ZOOM_FACTOR + INITIAL_Y_OFFSET;
      let ca = a;
      let cb = b;
      let iteration = 0;

      while (iteration < MAX_ITERATIONS) {
        const aa = a * a;
        const bb = b * b;
        const twoAB = 2 * a * b;
        a = aa - bb + ca;
        b = twoAB + cb;

        if (aa + bb > 4) {
          break;
        }
        iteration++;
      }

      const color = calculateColor(iteration);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Function to handle window resize
function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  clearCanvas();
  drawMandelbrot();
}

// Event listeners
window.addEventListener("resize", handleResize);

// Initialization
canvas.width = canvasWidth;
canvas.height = canvasHeight;
drawMandelbrot();