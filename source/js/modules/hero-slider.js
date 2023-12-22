const initHeroSlider = (isLoop, breakpointSettings, tabIndexOnSlideChange = -1) => {
  const swiperWrapper = document.querySelector('[data-hero-swiper]');
  const swiperPagination = document.querySelector('[data-hero-pagination]');

  const swiperOptions = {
    loop: isLoop,
    pagination: {
      el: swiperPagination,
      clickable: true,
    },
    breakpoints: breakpointSettings,
    on: {
      slideChange: () => {
        swiperWrapper.querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.tabIndex = tabIndexOnSlideChange;
        });
      },
    },
  };

  return new window.Swiper(swiperWrapper, swiperOptions);
};

export {initHeroSlider};
