import { createDot } from "./dot";
import { POPULATION_SIZE } from "./constants";

export const createState = () => {
  return {
    start: Date.now(),
    frames: 0,
    fps: 0,
    time: 0,
    index: 0,
    running: false,
    generation: 1,
  };
};

export const createPopulation = () =>
  Array.from({ length: POPULATION_SIZE }, () => createDot());
