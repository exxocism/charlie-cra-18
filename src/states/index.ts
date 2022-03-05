import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: {
    primary: '#ff0000',
    secondary: '#00ff00',
  },
});
