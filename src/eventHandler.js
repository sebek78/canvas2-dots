import { MENU_HEIGHT } from "./constants";

export const handleEvent = ({ offsetX, offsetY }) => {
  if (offsetY < MENU_HEIGHT) {
    if (offsetX >= 100 && offsetX <= 150) {
      return {
        type: "RUN",
      };
    }
    if (offsetX >= 430 && offsetX <= 455) {
      return {
        type: "TOGGLE_OBSTACLE_1",
      };
    }
    if (offsetX >= 465 && offsetX <= 490) {
      return {
        type: "TOGGLE_OBSTACLE_2",
      };
    }
  }
};
