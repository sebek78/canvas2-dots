import { HEIGHT, MENU_HEIGHT } from "./constants";

const OBSTACLE_LENGTH = 160;
const OBSTACLE_WIDTH = 30;

export const obstacles = [
  {
    x: 240,
    y: OBSTACLE_LENGTH + MENU_HEIGHT,
    w: OBSTACLE_WIDTH,
    h: HEIGHT - OBSTACLE_LENGTH,
    isSet: false,
  },
  {
    x: 400,
    y: MENU_HEIGHT,
    w: OBSTACLE_WIDTH,
    h: HEIGHT - OBSTACLE_LENGTH - MENU_HEIGHT,
    isSet: false,
  },
];

export const obstacleCollision = (dot) =>
  obstacles.some((obs) => {
    if (obs.isSet) {
      return (
        dot.x >= obs.x &&
        dot.x <= obs.x + obs.w &&
        dot.y >= obs.y &&
        dot.y <= obs.y + obs.h
      );
    } else {
      return false;
    }
  });
