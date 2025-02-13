document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: { delay: 3000 },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
    });

    // Tryby
    document.getElementById("mode-toggle").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });

    document.getElementById("tactical-mode-toggle").addEventListener("click", function () {
        document.body.classList.toggle("tactical-mode");
    });

    // Modal
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const viewCount = document.getElementById("view-count");

    document.querySelectorAll(".swiper-slide img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalTitle.innerText = this.alt;
            viewCount.innerText = "Wyświetlono: " + (parseInt(viewCount.innerText.split(": ")[1]) + 1);
        });
    });

    document.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Sugestie
    document.getElementById("submit-suggestion").addEventListener("click", function () {
        alert("Dziękujemy za sugestię!");
        modal.style.display = "none";
    });
});