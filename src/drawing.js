import {
  WIDTH,
  HEIGHT,
  TARGET_X,
  TARGET_Y,
  START_X,
  START_Y,
} from "./constants";

export default function drawing(ctx, state, dots) {
  clearCanvas(ctx);
  drawMenu(ctx);
  drawBoard(ctx);
  drawFPS(ctx, state.fps);
  drawButton(ctx, state.running);
  drawGenerationNumber(ctx, state.generation);
  drawTarget(ctx, state);
  dots.forEach((dot) => drawDot(ctx, dot));
  drawStart(ctx);
}

const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
};

const drawMenu = (ctx) => {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, WIDTH, 29);
};

const drawBoard = (ctx) => {
  ctx.fillStyle = "#AEAEAE";
  ctx.fillRect(0, 30, WIDTH, HEIGHT);
};

function drawFPS(ctx, fps) {
  ctx.font = "16px sans-serif";
  ctx.fillStyle = "lightblue";
  ctx.textBaseline = "middle";
  ctx.fillText(`FPS: ${fps}`, 10, 15);
}

const drawTarget = (ctx) => {
  ctx.beginPath();
  ctx.arc(TARGET_X, TARGET_Y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
};

const drawStart = (ctx) => {
  ctx.beginPath();
  ctx.arc(START_X, START_Y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#0000FF";
  ctx.fill();
};

function drawButton(ctx, running) {
  ctx.font = "16px sans-serif";
  ctx.textBaseline = "middle";
  const text = running ? "Running" : "Start";
  const color = running ? "lightbule" : "lightgreen";
  ctx.fillStyle = color;
  ctx.fillText(text, 100, 15);
}

function drawGenerationNumber(ctx, num) {
  ctx.font = "16px sans-serif";
  ctx.fillStyle = "lightblue";
  ctx.textBaseline = "middle";
  ctx.fillText(`Generation: ${num}`, 190, 15);
}

export const drawDot = (ctx, dot) => {
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
};
