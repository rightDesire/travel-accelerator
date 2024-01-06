const initTrainingSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="training"]');
  const swiperButtonNext = document.querySelector('[data-btn-next="training"]');
  const swiperButtonPrev = document.querySelector('[data-btn-prev="training"]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
  });
};

export {initTrainingSlider};
