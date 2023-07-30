const baseURL = 'http://localhost:9000/api/articles/'


 const ArticleService = {
    getArticles() {
      return fetch(baseURL)
      .then(res => res.json())
    }
 }

 export default ArticleService;