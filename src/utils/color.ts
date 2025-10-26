const expandHex = (hex: string): string => {
  const normalized = hex.replace('#', '');

  if (normalized.length === 3) {
    return normalized.split('').map((char) => char + char).join('');
  }

  if (normalized.length === 6) {
    return normalized;
  }

  return '000000';
};

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const expanded = expandHex(hex);
  const r = parseInt(expanded.slice(0, 2), 16) || 0;
  const g = parseInt(expanded.slice(2, 4), 16) || 0;
  const b = parseInt(expanded.slice(4, 6), 16) || 0;

  return { r, g, b };
};

const srgbToLinear = (value: number): number => {
  const srgb = value / 255;
  return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
};

export const getContrastColor = (hex: string): string => {
  const { r, g, b } = hexToRgb(hex);

  const luminance = 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);

  return luminance > 0.6 ? '#0b0b0b' : '#ffffff';
};

export const rgbaFromHex = (hex: string, alpha: number): string => {
  const { r, g, b } = hexToRgb(hex);
  const safeAlpha = Math.min(Math.max(alpha, 0), 1);
  return `rgba(${r}, ${g}, ${b}, ${safeAlpha})`;
};
