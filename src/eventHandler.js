export const handleEvent = ({ offsetX, offsetY }) => {
  if (offsetY < 29) {
    if (offsetX >= 100 && offsetX <= 150) {
      return {
        type: "RUN",
      };
    }
    if (offsetX >= 410 && offsetX <= 435) {
      return {
        type: "TOGGLE_OBSTACLE_1",
      };
    }
    if (offsetX >= 445 && offsetX <= 465) {
      return {
        type: "TOGGLE_OBSTACLE_2",
      };
    }
  }
};
