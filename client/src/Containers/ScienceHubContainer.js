import { useState, useEffect } from 'react'
import ArticleService from '../Components/ArticleService'
import ArticleList from '../Components/ArticleList'
import TodaysQuiz from '../Components/TodaysQuiz'
import './ScienceHubCss.css'
import { Link } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopScores from "../Components/TopScores";
import ScienceHubArticle from '../Components/ScienceHubArticle';

const ScienceHubContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    ArticleService.getArticles()
      .then(articles => setArticles(articles))
  }, [])

  
  return (
   
    <Router> 
          
         <div className='parent'>
            <header className='header'>
              <Link className='header' to="/articles">Science Hub</Link>
              <Link className='header' to="/todaysquiz">Today's Quiz </Link>
              <Link className='header' to="/topscores">Top Scores</Link>
            </header>

          <Routes>
            <Route path="/articles" element={<ArticleList articles={articles}/>}/>
            <Route path="/articles/:id" element={<ScienceHubArticle  articles={articles}/>}/>
            <Route path="/todaysquiz" element={<TodaysQuiz/>}/> 
            <Route path="/topscores" element={<TopScores/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
          </Routes>

          <footer className='footer'>Made with 💜 by the Party Wizard's Fanclub</footer>
          </div>
      </Router>

  )
}

export default ScienceHubContainer;