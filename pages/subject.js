const cards = document.querySelectorAll(".subject-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const page = card.getAttribute("data-page");
    window.location.href = page;
  });
});
