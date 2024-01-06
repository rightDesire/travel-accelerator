export const initAltaiMedia = (src, description, breakpoints, widthIframe, heightIframe) => {
  const audioContainers = document.querySelectorAll('[data-audio-wrapper="altai"]');

  audioContainers.forEach((audioContainer) => {
    const audioPoster = audioContainer.querySelector('[data-poster="altai"]');
    const audioButton = audioContainer.querySelector('[data-button="altai"]');
    let iframe;

    // Если мобильная версия сайта, код выполняться не будет
    if (window.innerWidth < breakpoints.mobile) {
      return;
    }

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
      loadingIndicator.textContent = 'Загрузка аудио...';
      loadingIndicator.style.maxWidth = maxWidth;
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
        width: widthIframe,
        height: heightIframe,
        title: description,
        style: `display: none; border: none; width:${widthIframe}; height:${heightIframe};`,
      });

      // Создаем индикатор загрузки
      const loadingIndicator = createLoadingIndicator(widthIframe);
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
        width: widthIframe,
        height: heightIframe,
      });
    };


    // Обработчик клика по кнопке медиа
    const handleMediaButtonClick = () => {
      audioButton.disabled = true;
      createIframe();
    };

    // Добавляем слушатель клика по кнопке медиа внутри контейнера
    audioButton.addEventListener('click', handleMediaButtonClick);
  });
};
