const hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", () => {
  const mobileView = document.getElementById("mobile");
  mobileView.classList.toggle("hidden");
});
