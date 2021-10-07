const modalButton = document.getElementById("aboutButton");
const modalBackground = document.querySelector(".modalBackground");
const modalClose = document.querySelector(".modalClose");
modalButton.addEventListener("click", function () {
  modalBackground.classList.add("backgroundActive");
});
modalClose.addEventListener("click", function () {
  modalBackground.classList.remove("backgroundActive");
});
modalBackground.addEventListener("click", function () {
  modalBackground.classList.remove("backgroundActive");
});
