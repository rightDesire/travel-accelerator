const initAdvantagesSlider = (isLoop, breakpointSettings, vpTablet) => {
  // Получаем элементы слайдера
  const swiperContainer = document.querySelector('[data-advantages-swiper]');
  const swiperWrapper = swiperContainer.querySelector('[data-advantages-swiper-wrapper]');
  const swiperButtonNext = document.querySelector('[data-advantages-btn-next]');
  const swiperButtonPrev = document.querySelector('[data-advantages-btn-prev]');
  const swiperSlides = swiperWrapper.querySelectorAll('[data-advantages-swiper-slide]');

  // Конфигурация Swiper
  const swiperConfig = {
    loop: isLoop,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: breakpointSettings,
  };

  // Инициализация Swiper
  let mySwiper = new window.Swiper(swiperContainer, swiperConfig);

  // Флаг для отслеживания показа всех слайдов
  let isAllShown = false;

  // Переключение слайдов в зависимости от ширины окна
  const toggleSlides = () => {
    if (window.innerWidth >= vpTablet) {
      // Вернуться к изначальному количеству слайдов
      mySwiper.destroy(true, true);
      mySwiper = new window.Swiper(swiperContainer, swiperConfig);
      swiperWrapper.classList.remove('advantages-swiper-all-slides');
    } else {
      // Показать все слайды
      swiperWrapper.classList.add('advantages-swiper-all-slides');
      mySwiper.destroy(true, true);
    }

    // Инвертировать флаг
    isAllShown = !isAllShown;
  };

  // Добавление класса для нечетного количества слайдов
  const addOddCardClass = () => {
    if (swiperSlides.length % 2 === 1) {
      swiperSlides[swiperSlides.length - 1].classList.add('advantages-card--odd-card');
    }
  };

  // Обработчик изменения размера окна
  const handleResize = () => {
    toggleSlides();
  };

  // Инициализация
  addOddCardClass();
  toggleSlides();
  window.addEventListener('resize', handleResize);
};

export {initAdvantagesSlider};
