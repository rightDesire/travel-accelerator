import {initHeroSlider} from './hero-slider';
import {initReviewsSlider} from './reviews-slider';
import {initToursSlider} from './tours-slider';
import {initTrainingSlider} from './training-slider';
import {initAdvantagesSlider} from './advantages-slider';
import { initGallerySlider } from './gallery-slider';

const vpDesktop = 1200;
const vpTablet = 768;
const vpMobile = 320;

const loop = {
  hero: false, // Тестируем
  tours: false,
  training: false,
  reviews: true,
  advantages: true,
  gallery: true,
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
    initialSlide: 2,
    spaceBetween: 0,
  },
};

const breakpointsReviews = {
  [vpDesktop]: {
    allowTouchMove: false,
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

const breakpointsAdvantages = {
  [vpDesktop]: {
    allowTouchMove: false,
    initialSlide: 2,
    spaceBetween: 30,
    slidesPerView: 3.585,
    centeredSlides: !0,
  },
};

const breakpointsGallery = {
  [vpDesktop]: {
    allowTouchMove: false,
    slidesPerView: 'auto',
    // initialSlide: 2,
    spaceBetween: 5,
  },
  [vpTablet]: {
    allowTouchMove: true,
    slidesPerView: 'auto',
    // initialSlide: 2,
    spaceBetween: 5,
  },
  [vpMobile]: {
    allowTouchMove: true,
    slidesPerView: 'auto',
    // initialSlide: 2,
    spaceBetween: 3,
  },
};

export const initSliders = () => {
  initHeroSlider(loop.hero, breakpointsHero);
  initToursSlider(loop.tours, breakpointsTours);
  initTrainingSlider(loop.training, breakpointsTraining);
  initReviewsSlider(loop.reviews, breakpointsReviews);
  initAdvantagesSlider(loop.advantages, breakpointsAdvantages, vpDesktop);
  initGallerySlider(loop.gallery, breakpointsGallery);
};
