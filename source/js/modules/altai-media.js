export const initAltaiMedia = (src, description, breakpoints) => {
  // Если мобильная версия сайта, код выполняться не будет
  if (window.innerWidth < breakpoints.mobile) {
    return;
  }

  const audioContainer = document.querySelector('[data-altai-audio-wrapper]');
  const audioPoster = audioContainer.querySelector('[data-altai-poster]');
  const audioButton = audioContainer.querySelector('[data-altai-button]');
  const audioWidth = 340;
  const audioHeight = 220;
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
  const showAudioContent = () => {
    iframe.style.display = 'block';
    audioPoster.style.display = 'none';
  };

  // Функция создания iframe
  const createIframe = () => {
    iframe = document.createElement('iframe');
    setAttributes(iframe, {
      src,
      width: audioWidth,
      height: audioHeight,
      title: description,
      style: 'display: none; border: none; width:340px; height:220px;',
    });

    // Создаем индикатор загрузки
    const loadingIndicator = createLoadingIndicator(audioWidth);
    audioContainer.appendChild(loadingIndicator);

    // Добавляем слушатель события "load" к iframe
    iframe.addEventListener('load', () => {
      // После загрузки видео скрываем индикатор загрузки и отображаем видео
      loadingIndicator.remove();
      showAudioContent();
    });

    // Добавляем iframe в контейнер
    audioContainer.appendChild(iframe);

    // Устанавливаем размеры постера в зависимости от текущего размера вьюпорта
    setAttributes(audioPoster, {
      width: audioWidth,
      height: audioHeight,
    });
  };

  // Обработчик клика по кнопке видео
  const handleAudioButtonClick = () => {
    audioButton.disabled = true;
    createIframe();
  };

  // Добавляем слушатель клика по кнопке видео
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-altai-button]')) {
      // Обработчик события
      handleAudioButtonClick();
    }
  });
};
