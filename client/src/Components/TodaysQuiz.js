import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const TodaysQuiz = () => {
    const [questions, setQuestions] = useState([])


    useEffect(() => {
        getQuestions();

    }, [])

    const getQuestions = async function () {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986")
        const questions = await res.json();
        setQuestions(questions);
    }
    
    return(
        <>
        <header className='header'>
            <Link to="/articles">Science Hub | </Link>
            <Link to="/todaysquiz">Today's Quiz | </Link>
            <Link to="/topscores">  Top Scores</Link>
        </header>
        </>
    )
}

export default TodaysQuiz;


   
