document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h2").textContent;
            const description = card.querySelector("p").textContent;
            const rating = card.querySelector(".rating").textContent;
            const imgSrc = card.querySelector("img").src;

            const urlParams = new URLSearchParams({
                title: title,
                description: description,
                rating: rating,
                imgSrc: imgSrc
            });

            window.location.href = `espacio.html?${urlParams.toString()}`;
        });
    });
});
