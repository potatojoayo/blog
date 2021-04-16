export enum DISPLAY_SIZE {
  MOBILE,
  TABLET,
  DESKTOP,
}

const breakpoints = [800, 1280, 1920];

const mediaquery = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default mediaquery;
