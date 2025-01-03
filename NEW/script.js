

document.addEventListener("scroll", () => {
    const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");

    parallaxWrappers.forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const scrollOffset = (window.innerHeight - rect.top) * 0.2; 
        const card = wrapper.querySelector(".product-card");
        if (card) {
            card.style.transform = `translateY(${scrollOffset}px)`;
        }
    });
});

document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; 
    const parallaxTexts = document.querySelectorAll(".parallax-text");

    parallaxTexts.forEach((text, index) => {
        const offset = scrollTop * (0.2 + index * 0.1); 
        const scale = 1 + scrollTop / 1000;
        text.style.transform = `translateY(${offset}px) scale(${scale})`;
    });
});



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
