document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");
    const articles = [
        {title: "Championship Final", image: "champ.jpeg", link: "#"},
        {title: "Olympics Updates", image: "olympics.png", link: "#"},
        {title: "New Football Records", image: "foote.jpeg", link: "#"},
        {title: "Tennis Grand Slam", image: "tennis.jpg", link: "#"},
        {title: "Cricket World Cup", image: "world.jpeg", link: "#"},
        {title: "F1 Racing Championship", image: "car.jpeg", link: "#"},
        {title: "Hindi imposition ", image: "Tamil.jpg", link: "#"},
        {title: "Russia vs Ukraine", image: "russ.jpeg", link: "#"}
    ];
    
    articles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <a href="${article.link}">Read More</a>
        `;
        newsContainer.appendChild(newsItem);
    });
});