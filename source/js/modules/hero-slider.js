const initHeroSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-hero-swiper]');
  const swiperPagination = document.querySelector('[data-hero-pagination]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    pagination: {
      el: swiperPagination,
      clickable: true, // Делает пагинацию кликабельной
    },
    breakpoints: breakpointSettings,
    on: {
      slideChange: () => {
        // Всем слайдам tabIndex = -1
        swiperWrapper.querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.tabIndex = -1;
        });
      },
    },
  });
};

export {initHeroSlider};
