import { WIDTH, HEIGHT } from "./constants";

export default function drawing(ctx, state) {
  ctx.clearRect(0, 0, 640, 480);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, WIDTH, 29);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 30, WIDTH, HEIGHT);
  drawFPS(ctx, state.fps);
}

function drawFPS(ctx, fps) {
  ctx.font = "16px sans-serif";
  ctx.fillStyle = "lightblue";
  ctx.textBaseline = "middle";
  ctx.fillText(`FPS: ${fps}`, 10, 15);
}
