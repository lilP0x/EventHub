document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    const title = urlParams.get("title");
    const description = urlParams.get("description");
    const rating = urlParams.get("rating");
    const imgSrc = urlParams.get("imgSrc");

    document.getElementById("space-title").textContent = title;
    document.getElementById("space-description").textContent = description;
    document.getElementById("space-rating").textContent = `Rating: ${rating}`;
    document.getElementById("space-image").src = imgSrc;
});
