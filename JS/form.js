const form = document.getElementById('contactForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const response = await fetch('https://script.google.com/macros/s/AKfycbwJv-PTojYvkhOMqUZccupCbncm_LZ08hkBNS4J4BioZp9a_fv3x03ctPc5KBQ5_wU/exec', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
          });

 
  