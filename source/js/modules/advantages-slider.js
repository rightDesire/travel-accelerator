const initAdvantagesSlider = (isLoop, breakpointSettings, vpTablet) => {
  const swiperContainer = document.querySelector('[data-advantages-swiper]');
  const swiperWrapper = swiperContainer.querySelector('[data-advantages-swiper-wrapper]');
  const swiperButtonNext = document.querySelector('[data-advantages-btn-next]');
  const swiperButtonPrev = document.querySelector('[data-advantages-btn-prev]');
  const swiperSlides = swiperWrapper.querySelectorAll('[data-advantages-swiper-slide]');

  const middleSlide = Math.floor(swiperSlides.length) / 2;

  const swiperConfig = {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
    initialSlide: middleSlide,
  };

  let mySwiper = new window.Swiper(swiperContainer, swiperConfig);

  let isAllShown = false;
  const toggleSlides = () => {
    if (window.innerWidth >= vpTablet) {
      // Вернуться к изначальному количеству слайдов
      mySwiper.destroy(true, true);
      mySwiper = new window.Swiper(swiperContainer, swiperConfig);
      swiperWrapper.classList.remove('advantages-swiper-all-slides');

      // Показать кнопки переключения
      mySwiper.navigation.nextEl.style.display = 'flex';
      mySwiper.navigation.prevEl.style.display = 'flex';
    } else {
      // Показать все слайды
      swiperWrapper.classList.add('advantages-swiper-all-slides');
      // Скрыть кнопки переключения
      mySwiper.navigation.nextEl.style.display = 'none';
      mySwiper.navigation.prevEl.style.display = 'none';
      mySwiper.destroy(true, true);
    }

    // Инвертировать флаг
    isAllShown = !isAllShown;
  };

  const oddCards = () => {
    if (swiperSlides.length % 2 !== 0) {
      swiperSlides[swiperSlides.length - 1].classList.add('advantages-card--odd-card');
    }
  };

  const handleResize = () => {
    toggleSlides();
  };

  oddCards();
  handleResize();
  window.addEventListener('resize', handleResize);
};

export {initAdvantagesSlider};
