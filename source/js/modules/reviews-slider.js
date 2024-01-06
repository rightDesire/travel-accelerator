const initReviewsSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="reviews"]');
  const swiperButtonNext = document.querySelector('[data-btn-next="reviews"]');
  const swiperButtonPrev = document.querySelector('[data-btn-prev="reviews"]');

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
