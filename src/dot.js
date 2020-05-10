import {
  WIDTH,
  HEIGHT,
  BRAIN_SIZE,
  STEP,
  TARGET_X,
  TARGET_Y,
} from "./constants";

export const createDot = () => {
  let dot = {};
  dot.x = 100;
  dot.y = 235;
  dot.brain = createBrain();
  dot.lives = true;
  dot.fitness = null;

  dot.draw = (ctx) => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
  };

  dot.move = (index) => {
    if (index >= BRAIN_SIZE || !dot.lives) return;
    let angle = dot.brain[index];
    let newX = Math.cos((angle * Math.PI) / 180) * STEP;
    let newY = Math.sin((angle * Math.PI) / 180) * STEP;
    dot.x += newX;
    dot.y += newY;
  };

  dot.calcFitness = () => {
    dot.fitness = Math.sqrt(
      Math.pow(TARGET_X - dot.x, 2) + Math.pow(TARGET_Y - dot.y, 2)
    );
  };

  dot.update = () => {
    if (dot.x <= 0 || dot.x >= WIDTH || dot.y <= 30 || dot.y >= HEIGHT) {
      dot.lives = false;
    }
  };

  return dot;
};

const createBrain = () =>
  Array.from({ length: BRAIN_SIZE }, () => Math.random() * 360);
