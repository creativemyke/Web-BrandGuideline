// Example: src/colorname.js

import namer from "color-namer";

function getColorName(hex) {
  const colorInfo = namer(hex);

  if (colorInfo && colorInfo.basic && colorInfo.basic.length > 0) {
    return colorInfo.basic[0].name;
  } else {
    return "Unknown";
  }
}

// Example usage:
const hexColor = "#70E4EF";
const colorNameResult = getColorName(hexColor);
console.log(colorNameResult);
console.log(`The color name for ${hexColor} is: ${colorNameResult}`);
