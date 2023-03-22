export const size = {
  xsm: "390px",
  sm: "580px",
  md: "890px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1440px",
};

export const device = {
  xsm: `(min-width: ${size.xsm})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};

export const theme = {
  size,
  device,
};
