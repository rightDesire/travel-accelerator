import {initHeroSlider} from './hero-slider';
import {initReviewsSlider} from './reviews-slider';
import {initToursSlider} from './tours-slider';
import {initTrainingSlider} from './training-slider';

const vpDesktop = 1200;
const vpTablet = 768;
const vpMobile = 320;

const loop = {
  hero: false, // Тестируем
  yours: false,
  training: false,
  reviews: true,
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
    spaceBetween: 0,
  },
};

const breakpointsTraining = {
  [vpDesktop]: {
    allowTouchMove: false,
    slidesPerView: 4,
    spaceBetween: 20,
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 20,
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

const breakpointsReviews = {
  [vpDesktop]: {
    allowTouchMove: true,
    slidesPerView: 'auto',
    spaceBetween: 120,
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

export const initSliders = () => {
  initHeroSlider(loop.hero, breakpointsHero);
  initToursSlider(loop.tours, breakpointsTours);
  initTrainingSlider(loop.training, breakpointsTraining);
  initReviewsSlider(loop.reviews, breakpointsReviews);
};
