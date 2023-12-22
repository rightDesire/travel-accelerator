const initToursSlider = (isLoop, breakpointSettings, initSlide) => {
  const swiperContainer = document.querySelector('[data-tours-swiper]');
  const swiperWrapper = swiperContainer.querySelector('[data-tours-swiper-wrapper]');
  const swiperButtonNext = document.querySelector('[data-tours-btn-next]');
  const swiperButtonPrev = document.querySelector('[data-tours-btn-prev]');

  const swiperConfig = {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
    initialSlide: initSlide,
  };

  let mySwiper = new window.Swiper(swiperContainer, swiperConfig);

  const showAllButton = document.querySelector('[data-all-slides-btn]');
  const showAllButtonText = showAllButton.querySelector('[data-all-slides-text]');
  const showAllButtonIcon = showAllButton.querySelector('[data-all-slides-icon]');
  let isAllShown = false;

  const toggleSlides = () => {
    if (isAllShown) {
      // Вернуться к изначальному количеству слайдов
      mySwiper.destroy(true, true);
      mySwiper = new window.Swiper(swiperContainer, swiperConfig);
      swiperWrapper.classList.remove('tours-swiper-all-slides');

      // Показать кнопки переключения
      mySwiper.navigation.nextEl.style.display = 'flex';
      mySwiper.navigation.prevEl.style.display = 'flex';

      // Изменить текст кнопки
      showAllButtonText.textContent = 'Показать все туры';
      showAllButtonIcon.style.scale = '1';

    } else {
      // Показать все слайды
      swiperWrapper.classList.add('tours-swiper-all-slides');
      showAllButtonIcon.style.scale = '-1';
      // Скрыть кнопки переключения
      mySwiper.navigation.nextEl.style.display = 'none';
      mySwiper.navigation.prevEl.style.display = 'none';
      mySwiper.destroy(true, true);
      // Изменить текст кнопки
      showAllButtonText.textContent = 'Скрыть все туры';
    }

    // Инвертировать флаг
    isAllShown = !isAllShown;
  };

  showAllButton.addEventListener('click', toggleSlides);
};


export {initToursSlider};
