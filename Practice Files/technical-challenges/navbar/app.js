const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("mouseenter", () => {
  const dropdownMenu = document.querySelector(".dropdownMenu");

  dropdownMenu.classList.remove("hidden");
});

dropdown.addEventListener("mouseleave", () => {
  const dropdownMenu = document.querySelector(".dropdownMenu");

  dropdownMenu.classList.add("hidden");
});
