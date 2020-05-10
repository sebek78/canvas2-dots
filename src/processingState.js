import { STEPS } from "./constants";

export default function processingState(state, action, dots) {
  let stateCopy = Object.assign({}, state);
  stateCopy = addTimeUnit(stateCopy);
  stateCopy = calcFPS(stateCopy);
  if (Object.keys(action).length !== 0) {
    console.log(action);
    switch (action.type) {
      case "RUN":
        stateCopy.running = true;
    }
  }

  if (stateCopy.running) {
    dots.forEach((dot) => dot.move(state.index));
    dots.forEach((dot) => dot.lives && dot.update());

    stateCopy.index += 1;
  }
  if (stateCopy.index >= STEPS) {
    dots.forEach((dot) => dot.calcFitness());
    stateCopy.running = false;
    stateCopy.index = 0;
    console.log(dots);
  }

  return stateCopy;
}

const addTimeUnit = (state) =>
  Object.assign({}, state, { time: state.time + 1 });

const calcFPS = (state) => {
  const time = Date.now();
  if (time - state.start > 1000) {
    return Object.assign({}, state, {
      fps: state.frames,
      frames: 0,
      start: time,
    });
  } else {
    return Object.assign({}, state, { frames: state.frames + 1 });
  }
};
