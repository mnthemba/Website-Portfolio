const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show");
        } else {
            entry.target.classList.remove("scroll-show");
        }
    });
}, {
    threshold: 0.15
});

const elementsToAnimate = document.querySelectorAll(
    '#home, .my_img img, .vision, .mission, .abt_content img, #education, .skill_seg, #experience, #ContactInfo'
);

elementsToAnimate.forEach((el) => {
    el.classList.add('scroll-hidden');
    observer.observe(el);
});