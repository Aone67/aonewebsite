// Toggle the hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    
    navLinks.classList.toggle('show');
  }
  
  // Close the menu when any link is clicked
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.remove('show');
    });
  });
  