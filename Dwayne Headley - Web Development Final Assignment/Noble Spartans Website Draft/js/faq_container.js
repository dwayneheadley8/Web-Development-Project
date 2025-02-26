document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const arrow = item.querySelector(".arrow");

        question.addEventListener("click", () => {
            const isVisible = answer.style.display === "block";

            // Toggle visibility
            answer.style.display = isVisible ? "none" : "block";

            // Rotate arrow
            arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
        });
    });
});
