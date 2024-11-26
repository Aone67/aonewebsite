// let currentIndex = 0;

// // Function to show the slide based on the index
// function goToSlide(index) {
//   const slides = document.getElementsByClassName('mySlides');
//   const indicators = document.getElementsByClassName('indicator');
  
//   // Ensure the index is within bounds of the slide count
//   if (index >= 0 && index < slides.length) {
//     // Hide all slides and deactivate all indicators
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = 'none';
//       indicators[i].classList.remove('active');
//     }
    
//     // Show the selected slide and activate the respective indicator
//     slides[index].style.display = 'block';
//     indicators[index].classList.add('active');
//     currentIndex = index;
//   }
// }

// // Function to move to the next slide
// function nextSlide() {
//   // Calculate the next slide index with wrap-around
//   currentIndex = (currentIndex + 1) % document.getElementsByClassName('mySlides').length;
//   goToSlide(currentIndex);
// }

// // Initialize the slideshow and set an interval for automatic transitions
// function startSlideShow() {
//   goToSlide(0); // Show the first slide initially
//   setInterval(nextSlide, 5000); // Change slide every 5 seconds
// }

// // Set up the slideshow on window load
// window.onload = startSlideShow;




// New Js

let currentIndex = 1; // Start at the first actual slide (index 1)
let totalSlides; // Will be set based on the actual slide count (excluding clones)
const slideDuration = 1500; // Duration of animation in milliseconds
let slideInterval; // This will hold the interval for auto-sliding
let isPaused = false; // To track if the slideshow is paused or playing

function initializeCarousel() {
  const slides = document.querySelectorAll('.mySlides');
  totalSlides = slides.length - 2; // Exclude clones

  const track = document.querySelector('.carousel-track');
  const indicators = document.querySelectorAll('.indicator');

  // Set initial position to the first actual slide
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Auto-slide setup
  slideInterval = setInterval(() => nextSlide(), 5000); // Slide every 5 seconds

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
  const slides = document.querySelectorAll('.mySlides');

  // Disable transition for instant jumps
  if (instant) {
    track.style.transition = 'none';
  } else {
    track.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
  }

  // Update track position
  track.style.transform = `translateX(-${index * 100}vw)`;
  currentIndex = index;

  // Update indicators only if on an actual slide
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
    // Moved to the clone of the last slide, jump to the actual last slide
    currentIndex = totalSlides;
  } else if (currentIndex === totalSlides + 1) {
    // Moved to the clone of the first slide, jump to the actual first slide
    currentIndex = 1;
  }

  // Update position to the actual slide
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Update indicators
  updateIndicators(currentIndex);
}

function updateIndicators(index) {
  const indicators = document.querySelectorAll('.indicator');

  // Clear all active states
  indicators.forEach(indicator => indicator.classList.remove('active'));

  // Set active state for the current index (adjusted for actual slides)
  if (index > 0 && index <= totalSlides) {
    indicators[index - 1].classList.add('active'); // `index - 1` maps to actual slide indicators
  }
}

// Toggle Play/Pause functionality
function togglePlayPause() {
  const playPauseBtn = document.getElementById('playPauseBtn');

  if (isPaused) {
    // If the slideshow is paused, restart it
    slideInterval = setInterval(() => nextSlide(), 5000);
    playPauseBtn.textContent = 'Pause';
  } else {
    // If the slideshow is playing, stop it
    clearInterval(slideInterval);
    playPauseBtn.textContent = 'Play';
  }

  // Toggle the paused state
  isPaused = !isPaused;
}

// Initialize the carousel on page load
window.onload = initializeCarousel;
