const form = document.getElementById('contactForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const response = await fetch('https://script.google.com/macros/s/AKfycbxGnZjZ2K7xNQhEi_3C9zdUuRGtLfr4-OWlNRXeWzW69Q4ONUy15u6Bg-9g_0RZmcSSGw/exec', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
          });

 
  
