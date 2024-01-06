const initGallerySlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-swiper="gallery"]');
  const swiperButtonNext = document.querySelector('[data-btn-next="gallery"]');
  const swiperButtonPrev = document.querySelector('[data-btn-prev="gallery"]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
  });
};

export {initGallerySlider};
