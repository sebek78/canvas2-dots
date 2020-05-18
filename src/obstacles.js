import { HEIGHT } from "./constants";

export const obstacles = [
  {
    x: 240,
    y: 160 + 30,
    w: 30,
    h: HEIGHT - 160,
  },
  {
    x: 400,
    y: 30,
    w: 30,
    h: HEIGHT - 160 - 30,
  },
];

export const obstacleCollision = (dot) =>
  obstacles.some(
    (obs) =>
      dot.x >= obs.x &&
      dot.x <= obs.x + obs.w &&
      dot.y >= obs.y &&
      dot.y <= obs.y + obs.h
  );
