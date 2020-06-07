import { createDot } from "./dot";
import { POPULATION_SIZE } from "./constants";
import { obstacles } from "./obstacles";

export const createState = () => {
  return {
    start: Date.now(),
    frames: 0,
    fps: 0,
    index: 0,
    running: false,
    generation: 0,
    obstacles,
  };
};

export const createPopulation = () =>
  Array.from({ length: POPULATION_SIZE }, () => createDot());
