export default function processingState(state, action) {
  let stateCopy = Object.assign({}, state);
  stateCopy = addTimeUnit(stateCopy);
  stateCopy = calcFPS(stateCopy);
  if (Object.keys(action).length !== 0) console.log(action);

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
