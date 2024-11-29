const form = document.getElementById('contactForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const response = await fetch('https://script.google.com/macros/s/AKfycby07dwNX8o09BAQLcYDMFQ0-M-YsBc-lGORKJABfAN5xDYLyV8BiOeeLeFYgKUTypfgDw/exec', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
          });

 
  