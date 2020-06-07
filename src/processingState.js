import { STEPS } from "./constants";
import { moveDot, updateDot } from "./dot";
import { naturalSelection, calcFitness, cloneMutation } from "./population";

export const processingState = (state, action, dots) => {
  let stateCopy = Object.assign({}, state);
  stateCopy = calcFPS(stateCopy);
  if (action && Object.keys(action).length !== 0) {
    switch (action.type) {
      case "RUN":
        if (stateCopy.generation >= 1 && !stateCopy.running) {
          dots = calcFitness(dots);
          dots = naturalSelection(dots);
          dots = cloneMutation(dots);
        }
        if (!stateCopy.running) stateCopy.generation += 1;
        stateCopy.running = true;
        break;
      case "TOGGLE_OBSTACLE_1":
        if (!stateCopy.running)
          stateCopy.obstacles[0].isSet = !stateCopy.obstacles[0].isSet;
        break;
      case "TOGGLE_OBSTACLE_2":
        if (!stateCopy.running)
          stateCopy.obstacles[1].isSet = !stateCopy.obstacles[1].isSet;
        break;
    }
  }

  if (stateCopy.running) {
    dots = dots.map((dot) => moveDot(dot, state.index));
    dots = dots.map((dot) => updateDot(dot));
    stateCopy.index += 1;
  }
  if (stateCopy.index >= STEPS) {
    stateCopy.running = false;
    stateCopy.index = 0;
  }
  return [stateCopy, dots];
};

const calcFPS = (state) => {
  const time = Date.now();
  return time - state.start > 1000
    ? { ...state, fps: state.frames, frames: 0, start: time }
    : { ...state, frames: state.frames + 1 };
};
