// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
