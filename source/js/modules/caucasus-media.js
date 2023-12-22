export const initCaucasusMedia = (src, description, breakpoints) => {
  const videoWrapperContainer = document.querySelector('[data-caucasus-video-wrapper]');
  const videoPoster = videoWrapperContainer.querySelector('[data-caucasus-poster]');
  const videoButton = videoWrapperContainer.querySelector('[data-caucasus-button]');
  const maxWidthDesktop = 482;
  const maxWidthMobile = 442;
  let iframe;

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  };

  const createLoadingIndicator = (maxWidth) => {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.dataset.loading = '';
    loadingIndicator.textContent = 'Загрузка видео...';
    loadingIndicator.style.maxWidth = `${maxWidth}px`;
    return loadingIndicator;
  };

  const showVideoContent = () => {
    iframe.style.display = 'block';
    videoPoster.style.display = 'none';
  };

  const getWidthByBreakpoint = () => (window.innerWidth >= breakpoints.tablet ? maxWidthDesktop : maxWidthMobile);
  const getHeightByBreakpoint = () => (window.innerWidth >= breakpoints.tablet ? 317 : 300);

  const createIframe = () => {
    iframe = document.createElement('iframe');
    setAttributes(iframe, {
      src,
      width: getWidthByBreakpoint(),
      height: getHeightByBreakpoint(),
      title: description,
      style: 'display: none; border: none',
    });

    const loadingIndicator = createLoadingIndicator(getWidthByBreakpoint());
    videoWrapperContainer.appendChild(loadingIndicator);

    iframe.addEventListener('load', () => {
      loadingIndicator.remove();
      showVideoContent();
    });

    videoWrapperContainer.appendChild(iframe);

    setAttributes(videoPoster, {
      width: getWidthByBreakpoint(),
      height: getHeightByBreakpoint(),
    });
  };

  const handleVideoButtonClick = () => {
    videoButton.disabled = true;
    createIframe();
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-caucasus-button]')) {
      handleVideoButtonClick();
    }
  });
};
