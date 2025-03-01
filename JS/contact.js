  // Get the modal
  var contactModal = document.getElementById("contactModal");

  // Get the button that opens the modal
  var contactUsBtn = document.getElementById("contactUsBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementById("contactClose");

  // When the user clicks the button, open the modal 
  contactUsBtn.onclick = function() {
      contactModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      contactModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == contactModal) {
          contactModal.style.display = "none";
      }
  }

  