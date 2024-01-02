const initTrainingSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-training-swiper]');
  const swiperButtonNext = document.querySelector('[data-training-btn-next]');
  const swiperButtonPrev = document.querySelector('[data-training-btn-prev]');

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
