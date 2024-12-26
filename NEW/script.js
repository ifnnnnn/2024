// scripts.js

document.addEventListener("scroll", () => {
    const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");

    parallaxWrappers.forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const scrollOffset = (window.innerHeight - rect.top) * 0.2; // 視差速度調整
        const card = wrapper.querySelector(".product-card");
        if (card) {
            card.style.transform = `translateY(${scrollOffset}px)`;
        }
    });
});

document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // 滾動距離
    const parallaxTexts = document.querySelectorAll(".parallax-text");

    parallaxTexts.forEach((text, index) => {
        const offset = scrollTop * (0.2 + index * 0.1); // 控制不同文字的視差速度
        const scale = 1 + scrollTop / 1000; // 控制文字變大的比例
        text.style.transform = `translateY(${offset}px) scale(${scale})`;
    });
});


// 確保在重新整理頁面時回到頂部
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
