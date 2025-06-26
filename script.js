
function openModal() {
  document.getElementById("queryModal").style.display = "block";
}

function closeModal() {
  document.getElementById("queryModal").style.display = "none";
}

// Optional: close modal when clicking outside the modal-content
window.onclick = function (event) {
  const modal = document.getElementById("queryModal");
  if (event.target == modal) {
    closeModal();
  }
}

