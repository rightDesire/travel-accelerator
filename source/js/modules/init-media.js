import {initCaucasusMedia} from './caucasus-media';
import {initAltaiMedia} from './altai-media';

const vpTablet = 1200;
const vpMobile = 768;

const mediaOptions = {
  caucasus: {
    src: 'https://www.youtube.com/embed/9TZXsZItgdw',
    description: 'Видео с Кавказа.',
    breakpoints: {
      tablet: vpTablet,
      mobile: vpMobile,
    },
  },
  altai: {
    src: 'https://music.yandex.ru/iframe/track/119107082/25474374',
    description: 'Подкаст про алтайский трекинг-тур.',
    breakpoints: {
      tablet: vpTablet,
      mobile: vpMobile,
    },
  },
};

const initMedia = () => {
  initCaucasusMedia(mediaOptions.caucasus.src, mediaOptions.caucasus.description, mediaOptions.caucasus.breakpoints);
  initAltaiMedia(mediaOptions.altai.src, mediaOptions.altai.description, mediaOptions.altai.breakpoints);
};

export {initMedia};
