import {initHeroSlider} from './hero-slider';
import {initToursSlider} from './tours-slider';

const vpDesktop = 1200;
const vpTablet = 768;
const vpMobile = 320;

const loop = {
  loopHero: false, // Тестируем
  loopTours: false,
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

const breakpointsTours = {
  [vpDesktop]: {
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 30,
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: 2,
    spaceBetween: 18,
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 15,
  },
};

export const initSliders = () => {
  initHeroSlider(loop.loopHero, breakpointsHero);
  initToursSlider(loop.loopTours, breakpointsTours);
};
