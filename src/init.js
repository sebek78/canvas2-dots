import { createDot } from "./dot";

export const createState = () => {
  return {
    render: true,
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
  Array.from({ length: 30 }, () => createDot());
