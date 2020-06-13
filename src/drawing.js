import {
  WIDTH,
  HEIGHT,
  MENU_HEIGHT,
  TARGET_X,
  TARGET_Y,
  START_X,
  START_Y,
} from "./constants";
import { obstacles } from "./obstacles";

export default function drawing(ctx, state, dots) {
  clearCanvas(ctx);
  drawMenu(ctx);
  drawBoard(ctx);
  drawFPS(ctx, state.fps);
  drawButton(ctx, state.running);
  drawGenerationNumber(ctx, state.generation);
  drawObstaclesMenu(ctx, state);
  drawTarget(ctx, state);
  drawObstacles(ctx, obstacles);
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
  ctx.fillStyle = "#CCC";
  ctx.fillRect(0, MENU_HEIGHT, WIDTH, HEIGHT);
};

function drawFPS(ctx, fps) {
  ctx.fillStyle = "lightblue";
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
  const text = running ? "Running" : "Start";
  const color = running ? "lightbule" : "yellowgreen";
  ctx.fillStyle = color;
  ctx.fillText(text, 100, 15);
}

function drawGenerationNumber(ctx, num) {
  ctx.fillStyle = "lightblue";
  ctx.fillText(`Generation: ${num}`, 190, 15);
}

function drawObstaclesMenu(ctx, state) {
  ctx.fillStyle = "lightblue";
  ctx.fillText("Obstacles:", 340, 15);
  ctx.fillStyle = state.obstacles[0].isSet ? "lightblue" : "yellowgreen";
  ctx.fillText("1", 440, 15);
  ctx.fillStyle = state.obstacles[1].isSet ? "lightblue" : "yellowgreen";
  ctx.fillText("2", 475, 15);
}

export const drawDot = (ctx, dot) => {
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
};

const drawObstacles = (ctx, obstacles) => {
  obstacles.forEach((obs) => {
    if (obs.isSet) {
      ctx.fillStyle = "#424242";
      ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
    }
  });
};
