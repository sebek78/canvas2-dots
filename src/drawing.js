import { WIDTH, HEIGHT, TARGET_X, TARGET_Y } from "./constants";

export default function drawing(ctx, state, dots) {
  ctx.clearRect(0, 0, 640, 480);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, WIDTH, 29);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 30, WIDTH, HEIGHT);
  drawFPS(ctx, state.fps);
  drawRunBtn(ctx);
  drawGeneration(ctx, state.generation);
  drawTarget(ctx, state);
  dots.forEach((dot) => dot.draw(ctx));
}

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

function drawRunBtn(ctx) {
  ctx.font = "16px sans-serif";
  ctx.fillStyle = "lightblue";
  ctx.textBaseline = "middle";
  ctx.fillText("Run", 100, 15);
}

function drawGeneration(ctx, num) {
  ctx.font = "16px sans-serif";
  ctx.fillStyle = "lightblue";
  ctx.textBaseline = "middle";
  ctx.fillText(`Generation: ${num}`, 160, 15);
}
