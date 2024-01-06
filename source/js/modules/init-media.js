import {initCaucasusMedia} from './caucasus-media';
import {initAltaiMedia} from './altai-media';

const vpTablet = 1200;
const vpMobile = 768;

const iframeSize = {
  caucasus: {
    desktop: {
      width: '482px',
      height: '317px',
    },
    mobile: {
      width: '442px',
      height: '300px',
    },
  },
  altai: {
    width: '385px',
    height: '215px',
  },
};

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
  initCaucasusMedia(mediaOptions.caucasus.src, mediaOptions.caucasus.description, mediaOptions.caucasus.breakpoints, iframeSize.caucasus.desktop.width, iframeSize.caucasus.mobile.width, iframeSize.caucasus.desktop.height, iframeSize.caucasus.mobile.height);
  initAltaiMedia(mediaOptions.altai.src, mediaOptions.altai.description, mediaOptions.altai.breakpoints, iframeSize.altai.width, iframeSize.altai.height);
};

export {initMedia};
