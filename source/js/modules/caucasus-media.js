export const initCaucasusMedia = (src, description, breakpoints, widthDesktop, widthMobile, heightDesktop, heightMobile) => {
  const videoContainers = document.querySelectorAll('[data-video-wrapper="caucasus"]');

  videoContainers.forEach((videoWrapperContainer) => {
    const videoPoster = videoWrapperContainer.querySelector('[data-poster="caucasus"]');
    const videoButton = videoWrapperContainer.querySelector('[data-button="caucasus"]');
    let iframe;

    if (window.innerWidth < breakpoints.mobile) {
      return;
    }

    const setAttributes = (element, attributes) => {
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
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

    const getWidthAndHeightByBreakpoint = () => ({
      width: window.innerWidth >= breakpoints.tablet ? widthDesktop : widthMobile,
      height: window.innerWidth >= breakpoints.tablet ? heightDesktop : heightMobile,
    });

    const createIframe = () => {
      iframe = document.createElement('iframe');
      const {width, height} = getWidthAndHeightByBreakpoint();
      setAttributes(iframe, {src, width, height, title: description, style: 'display: none; border: none'});

      const loadingIndicator = createLoadingIndicator(width);
      videoWrapperContainer.appendChild(loadingIndicator);

      iframe.addEventListener('load', () => {
        loadingIndicator.remove();
        showVideoContent();
      });

      videoWrapperContainer.appendChild(iframe);
      setAttributes(videoPoster, {width, height});
    };

    const handleVideoButtonClick = () => {
      videoButton.disabled = true;
      createIframe();
    };

    videoButton.addEventListener('click', handleVideoButtonClick);
  });
};
