
  // Define the classes you want to target
  const targetClasses = ['our-product', 'about-us', 'class3']; // Add your specific class names here

  // Select all elements with the target classes and add 'fade-in' class for initial styling
  const sections = document.querySelectorAll(targetClasses.map(c => `.${c}`).join(','));
  sections.forEach(section => section.classList.add('fade-in'));

  // Create an Intersection Observer to handle the fade effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add visible class when in view
      } else {
        entry.target.classList.remove('visible'); // Optional: remove to reanimate on scroll out
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the element is visible
  });

  // Observe each section
  sections.forEach((section) => observer.observe(section));

