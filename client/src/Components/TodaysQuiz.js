import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import QuestionCard from "./QuestionCard";

const TodaysQuiz = () => {
    const [questions, setQuestions] = useState([])
    // const [correctAnswers, setCorrectAnswers] = useState(0)
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [answer5, setAnswer5] = useState("")
    const [answer6, setAnswer6] = useState("")
    const [answer7, setAnswer7] = useState("")
    const [answer8, setAnswer8] = useState("")
    const [answer9, setAnswer9] = useState("")
    const [answer10, setAnswer10] = useState("")


    useEffect(() => {
        getQuestions();

    }, [])

    const getQuestions = async function () {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986")
        const questions = await res.json();
        setQuestions(questions.results);

        
    }

    // const questionList = () => {
        // const questionListItems = questions.map((question, index) => {
        //     return <QuestionCard key={index} question={question}/>
            
        // })


        
        if (questions.length === 0 ) {
            return "...loading"
        }

        return (

            <form>
                <p>{questions[0].question}</p>
                <input name="button" htmlFor="answer1" type="radio" value={answer1} onChange={(event) => setAnswer1(event.target.value)}/>
                <label id="answer1">{questions[0].incorrect_answers[0]}</label><br></br>
                <input name="button" htmlFor="answer2" type="radio" value={answer1} onChange={(event) => setAnswer1(event.target.value)}/>
                <label id="answer2">{questions[0].incorrect_answers[1]}</label><br></br> 
                <input name="button" htmlFor="answer3" type="radio" value={answer1} onChange={(event) => setAnswer1(event.target.value)}/>
                <label id="answer3">{questions[0].incorrect_answers[2]}</label><br></br> 
                <input name="button" htmlFor="answer4" type="radio" value={answer1} onChange={(event) => setAnswer1(event.target.value)}/>
                <label id="answer4">{questions[0].correct_answer}</label><br></br> 
                <hr></hr>
                <p>{questions[1].question}</p>
                <input name="button" htmlFor="answer1" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer1">{questions[1].incorrect_answers[0]}</label><br></br>
                <input name="button" htmlFor="answer4" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer4">{questions[1].correct_answer}</label><br></br>
                <input name="button" htmlFor="answer2" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer2">{questions[1].incorrect_answers[1]}</label><br></br> 
                <input name="button" htmlFor="answer3" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer3">{questions[1].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                {/* {questionListItems} */}
           </form>
            
        )



   
    
    
    
}

export default TodaysQuiz;



