let tabButtons = document.querySelectorAll(".nav-link");
let tabContents = document.querySelectorAll(".content");

// Tab click logic
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Hide all contents
    tabContents.forEach((content) => {
      content.classList.remove("show");
      content.style.display = "none"; // hide non-matching
    });

    // Activate clicked button
    button.classList.add("active");

    if (target === "all") {
      // Show all content
      tabContents.forEach((content) => {
        content.style.display = "block";
        setTimeout(() => content.classList.add("show"), 80); // trigger fade
      });
    } else {
      // Show only matching contents
      document
        .querySelectorAll(`.content[data-tab="${target}"]`)
        .forEach((content) => {
          content.style.display = "block";
          setTimeout(() => content.classList.add("show"), 80); // trigger fade
        });
    }
  });
});

// On page load — show all and activate "All" tab
window.addEventListener("DOMContentLoaded", () => {
  tabButtons.forEach((btn) => btn.classList.remove("active"));
  tabContents.forEach((content) => {
    content.style.display = "block";
    content.classList.add("show");
  });

  const allBtn = document.querySelector(`.nav-link[data-tab="all"]`);
  if (allBtn) allBtn.classList.add("active");
});
