import { useState, useEffect } from 'react'
import ArticleService from '../Components/ArticleService'
import ArticleList from '../Components/ArticleList'
import TodaysQuiz from '../Components/TodaysQuiz'
import './ScienceHubCss.css'

const ScienceHubContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    ArticleService.getArticles()
      .then(articles => setArticles(articles))
  }, [])

  console.log(articles);
  return (
    <div className='parent'>
      <header className='header'>
        <a href="">Science Hub | </a>
        <a href="">  Today's Quiz | </a>
        <a href="">  Top Scores</a>
      </header>
      <input className="filterbar" type='text'/>
      <ArticleList articles ={articles}/>
      <footer className='footer'>Made with 💜 by the Party Wizard's Fanclub</footer>
    </div>
  )
}

export default ScienceHubContainer;