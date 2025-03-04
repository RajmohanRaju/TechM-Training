const loadArticles = async () => {
    const response = await fetch('data.json');
    const articles = await response.json();
    console.log(articles);
};
loadArticles();