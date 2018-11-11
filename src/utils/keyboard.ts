/**
 * Keyboard utils
 */
export const isEnterKey = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 13;
};

export const isEscape = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 27;
};

export const isDown = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 40;
};

export const isUp = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 38;
};

export const isRight = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 39;
};

export const isLeft = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 37;
};

export const isSpace = (keyCode: string | number = 0): boolean => {
  return Number(keyCode) === 32;
};
