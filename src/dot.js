import {
  WIDTH,
  HEIGHT,
  BRAIN_SIZE,
  STEP,
  TARGET_X,
  TARGET_Y,
  START_X,
  START_Y,
  MUTATION_RATE,
} from "./constants";
import { obstacleCollision } from "./obstacles";

export const createDot = () => {
  let dot = createDotBody();
  dot.brain = createBrain();
  return dot;
};

export const moveDot = (dot, index) => {
  if (!dot.lives || dot.reachedGoal) return dot;
  let angle = dot.brain[index];
  let newX = dot.x + Math.cos((angle * Math.PI) / 180) * STEP;
  let newY = dot.y + Math.sin((angle * Math.PI) / 180) * STEP;
  return { ...dot, x: newX, y: newY };
};

export const updateDot = (dot) => {
  if (!dot.lives || dot.reachedGoal) return dot;
  const updatedDot = { ...dot };
  if (outsideBoard(dot) || obstacleCollision(dot)) updatedDot.lives = false;
  if (distance(dot) < 5) updatedDot.reachedGoal = true;
  updatedDot.steps += 1;
  return updatedDot;
};

export const distance = (dot) =>
  Math.sqrt(Math.pow(TARGET_X - dot.x, 2) + Math.pow(TARGET_Y - dot.y, 2));

const outsideBoard = (dot) =>
  dot.x <= 0 || dot.x >= WIDTH || dot.y <= 30 || dot.y >= HEIGHT;

const randomAngle = () => Math.random() * 360;

const createBrain = () =>
  Array.from({ length: BRAIN_SIZE }, () => randomAngle());

export const mutation = (brain) =>
  brain.map((angle) => {
    const rand = Math.random();
    return rand < MUTATION_RATE ? randomAngle() : angle;
  });

export const createDotBody = () => ({
  x: START_X,
  y: START_Y,
  lives: true,
  fitness: null,
  reachedGoal: false,
  steps: 0,
});
