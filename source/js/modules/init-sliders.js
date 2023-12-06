import {initHeroSlider} from './hero-slider';

const vpDesktop = 1440;
const vpTablet = 1200;
const vpMobile = 768;

const loop = {
  loopHero: true,
};

const breakpointsHero = {
  [vpDesktop]: {
    allowTouchMove: false,
  },
  [vpTablet]: {
    allowTouchMove: true,
  },
  [vpMobile]: {
    allowTouchMove: true,
  },
};

export const initSliders = () => {
  initHeroSlider(loop.loopHero, breakpointsHero);
};
