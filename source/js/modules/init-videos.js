import {initCamchatkaVideo} from './camchatka-video';

const vpTablet = 1200;
const vpMobile = 768;

const videosOptions = {
  camchatka: {
    src: 'https://www.youtube.com/embed/9TZXsZItgdw',
    description: 'Видео с Камчатки.',
    breakpoints: {
      tablet: vpTablet,
      mobile: vpMobile,
    },
  },
};

export const initVideos = () => {
  initCamchatkaVideo(videosOptions.camchatka.src, videosOptions.camchatka.description, videosOptions.camchatka.breakpoints);
};
