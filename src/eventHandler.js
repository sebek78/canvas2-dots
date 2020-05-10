export const handleEvent = ({ offsetX, offsetY }) => {
  if (offsetY < 29) {
    return {
      type: "MENU",
      realX: offsetX,
    };
  }
  if (offsetY > 29)
    return {
      type: "FIELD",
      newX: offsetX,
      newY: offsetY,
    };
};
