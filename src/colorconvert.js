function hexToCMYKRGB(hex) {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Calculate CMYK values
  const k = 1 - Math.max(r, g, b);
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  // Convert RGB to 0-255 range
  const rgb = {
    red: Math.round(r * 255),
    green: Math.round(g * 255),
    blue: Math.round(b * 255),
  };

  // Convert CMYK to percentage
  const cmyk = {
    cyan: Math.round(c * 100),
    magenta: Math.round(m * 100),
    yellow: Math.round(y * 100),
    black: Math.round(k * 100),
  };

  return {
    hex: hex.toUpperCase(),
    rgb: rgb,
    cmyk: cmyk,
  };
}

// Example usage:
const colorValues = hexToCMYKRGB("#3498db");
console.log(colorValues.cmyk);
