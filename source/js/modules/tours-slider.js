const initToursSlider = (isLoop, breakpointSettings) => {
  const swiperContainer = document.querySelector('[data-swiper="tours"]');
  const swiperWrapper = swiperContainer.querySelector('[data-swiper-wrapper="tours"]');
  const swiperButtonNext = document.querySelector('[data-btn-next="tours"]');
  const swiperButtonPrev = document.querySelector('[data-btn-prev="tours"]');

  const swiperConfig = {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
  };

  let mySwiper = new window.Swiper(swiperContainer, swiperConfig);

  const showAllButton = document.querySelector('[data-button="all-slides"]');
  const showAllButtonText = showAllButton.querySelector('[data-text="all-slides"]');
  const showAllButtonIcon = showAllButton.querySelector('[data-icon="all-slides"]');
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
