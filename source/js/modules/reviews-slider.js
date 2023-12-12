const initReviewsSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const swiperButtonNext = document.querySelector('[data-reviews-btn-next]');
  const swiperButtonPrev = document.querySelector('[data-reviews-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
  });
};

export {initReviewsSlider};
