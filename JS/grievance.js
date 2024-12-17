function openContactModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "block";
  }
  
  // Close modal logic
  document.getElementById("contactClose").onclick = function () {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none";
  };
  
  window.onclick = function (event) {
    const modal = document.getElementById("contactModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  