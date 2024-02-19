const scrollToElement = (element: HTMLElement | null, duration: number = 300): void => {
  if (!element) return;

  const targetY = element.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const scroll = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startY + distance * progress);

    if (timeElapsed < duration) {
      window.requestAnimationFrame(scroll);
    }
  };

  window.requestAnimationFrame(scroll);
};

export default scrollToElement;