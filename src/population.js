import { POPULATION_SIZE } from "./constants";
import { createDotBody, distance, mutation } from "./dot";

export const calcFitness = (dots) =>
  dots.map((dot) => ({
    ...dot,
    fitness: dot.reachedGoal
      ? 1 / 16 + 10000 / Math.pow(dot.steps, 2)
      : 1 / Math.pow(distance(dot), 2),
  }));

export const naturalSelection = (dots) => {
  const fitnessSum = calculateFitnessSum(dots);
  const newDots = [];
  for (let i = 0; i < POPULATION_SIZE; i++) {
    const parent = selectParent(fitnessSum, dots);
    const newDot = cloneDot(parent);
    newDots.push(newDot);
  }
  return newDots;
};

const calculateFitnessSum = (dots) =>
  dots.reduce((sum, dot) => sum + dot.fitness, 0);

const selectParent = (fitnessSum, dots) => {
  const rand = Math.random() * fitnessSum;
  let runningSum = 0;
  for (let i = 0; i < POPULATION_SIZE; i++) {
    runningSum += dots[i].fitness;
    if (runningSum > rand) return dots[i];
  }
};

const cloneDot = (parent) => {
  const newDot = createDotBody();
  newDot.brain = [...parent.brain];
  return newDot;
};

export const cloneMutation = (dots) =>
  dots.map((dot) => ({ ...dot, brain: mutation(dot.brain) }));
