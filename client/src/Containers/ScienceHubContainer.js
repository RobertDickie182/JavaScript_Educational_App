import { useState, useEffect } from 'react'
import ArticleService from '../Components/ArticleService'
import ArticleList from '../Components/ArticleList'

const ScienceHubContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    ArticleService.getArticles()
      .then(articles => setArticles(articles))
  }, [])

  console.log(articles);
  return (
    <>
      <ArticleList articles ={articles}/>
    </>
  )
}



export default ScienceHubContainer;