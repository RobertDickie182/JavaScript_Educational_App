import { useState, useEffect } from 'react'
import ArticleService from '../Components/ArticleService'
import ArticleList from '../Components/ArticleList'
import './ScienceHubCss.css'
import { Link } from "react-router-dom";

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
        <Link to="/articles">Science Hub | </Link>
        <Link to="/todaysquiz">Today's Quiz | </Link>
        <Link to="/topscores">  Top Scores</Link>
      </header>
      <input className="filterbar" type='text'/>
      <ArticleList articles ={articles}/>
      <footer className='footer'>Made with 💜 by the Party Wizard's Fanclub</footer>
    </div>
  )
}

export default ScienceHubContainer;