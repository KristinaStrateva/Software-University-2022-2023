function getArticleGenerator(articles) {
    const divElement = document.getElementById('content');

    function nextArticle() {
        
        if (articles.length) {
            let currArticleText = articles.shift();
            
            let article = document.createElement('article');
            article.textContent = currArticleText;
            divElement.appendChild(article);
        }
    }

    return nextArticle;
}