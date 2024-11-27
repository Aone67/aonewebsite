let currentIndex = 1; // Start at the first actual slide (index 1)
let totalSlides; // Set based on the actual slide count (excluding clones)
const slideDuration = 1500; // Duration of animation in milliseconds
let slideInterval; // Interval for auto-sliding
let isPaused = false; // Tracks slideshow state

function initializeCarousel() {
  const slides = document.querySelectorAll('.mySlides');
  totalSlides = slides.length - 2; // Exclude clones

  const track = document.querySelector('.carousel-track');
  const indicators = document.querySelectorAll('.indicator');

  // Set initial position to the first actual slide
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Auto-slide setup
  slideInterval = setInterval(nextSlide, 5000); // Slide every 5 seconds

  // Listen for transition end to handle looping
  track.addEventListener('transitionend', handleLooping);

  // Indicators setup
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index + 1, true); // Go to the actual slide (index + 1)
    });
  });

  // Initialize indicator for the first slide
  updateIndicators(currentIndex);

  // Play/Pause Button setup
  const playPauseBtn = document.getElementById('playPauseBtn');
  playPauseBtn.addEventListener('click', togglePlayPause);
}

function goToSlide(index, instant = false) {
  const track = document.querySelector('.carousel-track');

  // Disable transition for instant jumps
  track.style.transition = instant ? 'none' : `transform ${slideDuration / 1000}s ease-in-out`;

  // Update track position
  track.style.transform = `translateX(-${index * 100}vw)`;
  currentIndex = index;

  // Update indicators if on an actual slide
  if (currentIndex > 0 && currentIndex <= totalSlides) {
    updateIndicators(currentIndex);
  }
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function handleLooping() {
  const track = document.querySelector('.carousel-track');

  // Remove transition temporarily for seamless looping
  track.style.transition = 'none';

  if (currentIndex === 0) {
    currentIndex = totalSlides; // Jump to actual last slide
  } else if (currentIndex === totalSlides + 1) {
    currentIndex = 1; // Jump to actual first slide
  }

  track.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Update indicators
  updateIndicators(currentIndex);
}

function updateIndicators(index) {
  const indicators = document.querySelectorAll('.indicator');

  // Clear all active states
  indicators.forEach(indicator => indicator.classList.remove('active'));

  // Set active state for the current slide indicator
  if (index > 0 && index <= totalSlides) {
    indicators[index - 1].classList.add('active');
  }
}

function togglePlayPause() {
  const playPauseIcon = document.getElementById('playPauseIcon');

  if (isPaused) {
    // Resume slideshow
    slideInterval = setInterval(nextSlide, 5000);
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
  } else {
    // Pause slideshow
    clearInterval(slideInterval);
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
  }

  isPaused = !isPaused; // Toggle paused state
}

// Initialize the carousel on page load
window.onload = initializeCarousel;
