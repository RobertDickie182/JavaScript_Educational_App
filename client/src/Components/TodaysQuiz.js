import { useState, useEffect } from "react";

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
}


   

export default TodaysQuiz;