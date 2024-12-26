document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroText = document.querySelector(".hero-section .container");
    heroText.style.transform = `translateY(${scrollY * 0.3}px)`;
});
