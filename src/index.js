import "./styles.scss";
import { handleEvent } from "./eventHandler";
import processingState from "./processingState";
import drawing from "./drawing";

let state = {
  start: Date.now(),
  frames: 0,
  fps: 0,
  time: 0,
};

(function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let action = {};
  let renderer = true;

  const loop = () => {
    state = processingState(state, action);
    action = {};
    drawing(ctx, state);
    if (renderer) window.requestAnimationFrame(loop);
  };

  canvas.addEventListener("click", (e) => (action = handleEvent(e)), false);
  canvas.addEventListener("mouseleave", () => (renderer = false), false);
  canvas.addEventListener(
    "mouseenter",
    () => {
      renderer = true;
      window.requestAnimationFrame(loop);
    },
    false
  );
  window.requestAnimationFrame(loop);
})();
