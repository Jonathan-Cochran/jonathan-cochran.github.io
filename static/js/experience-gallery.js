(() => {
  const section = document.querySelector('.experience-gallery');
  if (!section) return;

  const track = section.querySelector('.experience-gallery__track');
  const slides = Array.from(section.querySelectorAll('.experience-gallery__slide'));
  const dots = Array.from(section.querySelectorAll('.experience-gallery__dot'));
  const progressSteps = Array.from(section.querySelectorAll('.experience-gallery__progress-step'));
  const yearPill = section.querySelector('.experience-gallery__year-pill');
  const prevButton = section.querySelector('[data-action="prev"]');
  const nextButton = section.querySelector('[data-action="next"]');

  if (!track || slides.length === 0) return;

  let activeIndex = 0;

  const setActive = (index) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    activeIndex = clamped;

    track.style.transform = `translateX(-${clamped * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === clamped);
      slide.setAttribute('aria-hidden', i === clamped ? 'false' : 'true');
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === clamped);
      dot.setAttribute('aria-current', i === clamped ? 'true' : 'false');
    });

    progressSteps.forEach((step, i) => {
      step.classList.toggle('is-active', i === clamped);
    });

    if (yearPill) {
      const label = slides[clamped].dataset.year || slides[clamped].dataset.yearLabel || '';
      yearPill.textContent = label;
    }

    if (prevButton) prevButton.disabled = clamped === 0;
    if (nextButton) nextButton.disabled = clamped === slides.length - 1;
  };

  const move = (delta) => setActive(activeIndex + delta);

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index || 0);
      setActive(index);
    });
  });

  if (prevButton) prevButton.addEventListener('click', () => move(-1));
  if (nextButton) nextButton.addEventListener('click', () => move(1));

  section.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });

  setActive(0);
})();
