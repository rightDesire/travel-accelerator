export const initCaucasusMedia = (src, description, breakpoints) => {
  // Если мобильная версия сайта, код выполняться не будет
  if (window.innerWidth < breakpoints.mobile) {
    return;
  }

  const videoContainer = document.querySelector('[data-caucasus-video-wrapper]');
  const videoPoster = videoContainer.querySelector('[data-caucasus-poster]');
  const videoButton = videoContainer.querySelector('[data-caucasus-button]');
  let iframe;

  // Функция установки атрибутов элемента
  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  };

  // Функция создания индикатора загрузки
  const createLoadingIndicator = (maxWidth) => {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.dataset.loading = '';
    loadingIndicator.textContent = 'Загрузка видео...';
    loadingIndicator.style.maxWidth = `${maxWidth}px`;
    return loadingIndicator;
  };

  // Функция отображения содержимого видео
  const showVideoContent = () => {
    iframe.style.display = 'block';
    videoPoster.style.display = 'none';
  };

  // Функция определения ширины iframe в зависимости от текущего размера вьюпорта
  const getWidthByBreakpoint = () => (window.innerWidth >= breakpoints.tablet ? 482 : 442);

  // Функция определения высоты iframe в зависимости от текущего размера вьюпорта
  const getHeightByBreakpoint = () => (window.innerWidth >= breakpoints.tablet ? 317 : 300);

  // Функция создания iframe
  const createIframe = () => {
    iframe = document.createElement('iframe');
    setAttributes(iframe, {
      src,
      width: getWidthByBreakpoint(),
      height: getHeightByBreakpoint(),
      title: description,
      style: 'display: none; border: none',
    });

    // Создаем индикатор загрузки
    const loadingIndicator = createLoadingIndicator(getWidthByBreakpoint());
    videoContainer.appendChild(loadingIndicator);

    // Добавляем слушатель события "load" к iframe
    iframe.addEventListener('load', () => {
      // После загрузки видео скрываем индикатор загрузки и отображаем видео
      loadingIndicator.remove();
      showVideoContent();
    });

    // Добавляем iframe в контейнер
    videoContainer.appendChild(iframe);

    // Устанавливаем размеры постера в зависимости от текущего размера вьюпорта
    setAttributes(videoPoster, {
      width: getWidthByBreakpoint(),
      height: getHeightByBreakpoint(),
    });
  };

  // Обработчик клика по кнопке видео
  const handleVideoButtonClick = () => {
    videoButton.disabled = true;
    createIframe();
  };

  // Добавляем слушатель клика по кнопке видео
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-caucasus-button]')) {
      // Обработчик события
      handleVideoButtonClick();
    }
  });
};
