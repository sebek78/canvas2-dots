export const handleEvent = ({ offsetX, offsetY }) => {
  if (offsetY < 29) {
    if (offsetX >= 100 && offsetX <= 150) {
      return {
        type: "RUN",
      };
    }
  }
  if (offsetY > 29)
    return {
      type: "FIELD",
      newX: offsetX,
      newY: offsetY,
    };
};
