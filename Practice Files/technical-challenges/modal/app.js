const modal = document.querySelector(".modal");
const button = document.querySelector(".openModal");
const cancelButton = document.querySelector(".cancel");
const deleteButton = document.querySelector(".delete");

button.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cancelButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

deleteButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
