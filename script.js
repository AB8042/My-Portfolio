/* Header Area */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Mobile dropdown toggle
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 991) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});


















/* Hero Area */
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});





/* Project Area */
const filterButtons = document.querySelectorAll(".filters button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filterValue === "all" || card.classList.contains(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});

/* LOAD MORE (Demo Logic) */
document.getElementById("loadMoreBtn").addEventListener("click", () => {
  alert("Load more projects logic here 🙂");
});





// Future animations or sliders can be added here
console.log("Section loaded successfully");



function startProject() {
  alert("Thank you! We will contact you soon 🚀");
}



// Contact Section
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});




