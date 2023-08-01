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
            return "loading..."
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
                <input name="button2" htmlFor="answer1" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer1">{questions[1].incorrect_answers[0]}</label><br></br>
                <input name="button2" htmlFor="answer4" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer4">{questions[1].correct_answer}</label><br></br>
                <input name="button2" htmlFor="answer2" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer2">{questions[1].incorrect_answers[1]}</label><br></br> 
                <input name="button2" htmlFor="answer3" type="radio" value={answer2} onChange={(event) => setAnswer2(event.target.value)}/>
                <label id="answer3">{questions[1].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[2].question}</p>
                <input name="button3" htmlFor="answer1" type="radio" value={answer3} onChange={(event) => setAnswer3(event.target.value)}/>
                <label id="answer1">{questions[2].incorrect_answers[0]}</label><br></br>
                <input name="button3" htmlFor="answer4" type="radio" value={answer3} onChange={(event) => setAnswer3(event.target.value)}/>
                <label id="answer4">{questions[2].correct_answer}</label><br></br>
                <input name="button3" htmlFor="answer2" type="radio" value={answer3} onChange={(event) => setAnswer3(event.target.value)}/>
                <label id="answer2">{questions[2].incorrect_answers[1]}</label><br></br> 
                <input name="button3" htmlFor="answer3" type="radio" value={answer3} onChange={(event) => setAnswer3(event.target.value)}/>
                <label id="answer3">{questions[2].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[3].question}</p>
                <input name="button4" htmlFor="answer1" type="radio" value={answer4} onChange={(event) => setAnswer4(event.target.value)}/>
                <label id="answer1">{questions[3].incorrect_answers[0]}</label><br></br>
                <input name="button4" htmlFor="answer4" type="radio" value={answer4} onChange={(event) => setAnswer4(event.target.value)}/>
                <label id="answer4">{questions[3].correct_answer}</label><br></br>
                <input name="button4" htmlFor="answer2" type="radio" value={answer4} onChange={(event) => setAnswer4(event.target.value)}/>
                <label id="answer2">{questions[3].incorrect_answers[1]}</label><br></br> 
                <input name="button4" htmlFor="answer3" type="radio" value={answer4} onChange={(event) => setAnswer4(event.target.value)}/>
                <label id="answer3">{questions[3].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[4].question}</p>
                <input name="button5" htmlFor="answer1" type="radio" value={answer5} onChange={(event) => setAnswer5(event.target.value)}/>
                <label id="answer1">{questions[4].incorrect_answers[0]}</label><br></br>
                <input name="button5" htmlFor="answer4" type="radio" value={answer5} onChange={(event) => setAnswer5(event.target.value)}/>
                <label id="answer4">{questions[4].correct_answer}</label><br></br>
                <input name="button5" htmlFor="answer2" type="radio" value={answer5} onChange={(event) => setAnswer5(event.target.value)}/>
                <label id="answer2">{questions[4].incorrect_answers[1]}</label><br></br> 
                <input name="button5" htmlFor="answer3" type="radio" value={answer5} onChange={(event) => setAnswer5(event.target.value)}/>
                <label id="answer3">{questions[4].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[5].question}</p>
                <input name="button6" htmlFor="answer1" type="radio" value={answer6} onChange={(event) => setAnswer6(event.target.value)}/>
                <label id="answer1">{questions[5].incorrect_answers[0]}</label><br></br>
                <input name="button6" htmlFor="answer4" type="radio" value={answer6} onChange={(event) => setAnswer6(event.target.value)}/>
                <label id="answer4">{questions[5].correct_answer}</label><br></br>
                <input name="button6" htmlFor="answer2" type="radio" value={answer6} onChange={(event) => setAnswer6(event.target.value)}/>
                <label id="answer2">{questions[5].incorrect_answers[1]}</label><br></br> 
                <input name="button6" htmlFor="answer3" type="radio" value={answer6} onChange={(event) => setAnswer6(event.target.value)}/>
                <label id="answer3">{questions[5].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[6].question}</p>
                <input name="button7" htmlFor="answer1" type="radio" value={answer7} onChange={(event) => setAnswer7(event.target.value)}/>
                <label id="answer1">{questions[6].incorrect_answers[0]}</label><br></br>
                <input name="button7" htmlFor="answer4" type="radio" value={answer7} onChange={(event) => setAnswer7(event.target.value)}/>
                <label id="answer4">{questions[6].correct_answer}</label><br></br>
                <input name="button7" htmlFor="answer2" type="radio" value={answer7} onChange={(event) => setAnswer7(event.target.value)}/>
                <label id="answer2">{questions[6].incorrect_answers[1]}</label><br></br> 
                <input name="button7" htmlFor="answer3" type="radio" value={answer7} onChange={(event) => setAnswer7(event.target.value)}/>
                <label id="answer3">{questions[6].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[7].question}</p>
                <input name="button8" htmlFor="answer1" type="radio" value={answer8} onChange={(event) => setAnswer8(event.target.value)}/>
                <label id="answer1">{questions[7].incorrect_answers[0]}</label><br></br>
                <input name="button8" htmlFor="answer4" type="radio" value={answer8} onChange={(event) => setAnswer8(event.target.value)}/>
                <label id="answer4">{questions[7].correct_answer}</label><br></br>
                <input name="button8" htmlFor="answer2" type="radio" value={answer8} onChange={(event) => setAnswer8(event.target.value)}/>
                <label id="answer2">{questions[7].incorrect_answers[1]}</label><br></br> 
                <input name="button8" htmlFor="answer3" type="radio" value={answer8} onChange={(event) => setAnswer8(event.target.value)}/>
                <label id="answer3">{questions[7].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[8].question}</p>
                <input name="button9" htmlFor="answer1" type="radio" value={answer9} onChange={(event) => setAnswer9(event.target.value)}/>
                <label id="answer1">{questions[8].incorrect_answers[0]}</label><br></br>
                <input name="button9" htmlFor="answer4" type="radio" value={answer9} onChange={(event) => setAnswer9(event.target.value)}/>
                <label id="answer4">{questions[8].correct_answer}</label><br></br>
                <input name="button9" htmlFor="answer2" type="radio" value={answer9} onChange={(event) => setAnswer9(event.target.value)}/>
                <label id="answer2">{questions[8].incorrect_answers[1]}</label><br></br> 
                <input name="button9" htmlFor="answer3" type="radio" value={answer9} onChange={(event) => setAnswer9(event.target.value)}/>
                <label id="answer3">{questions[8].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                <p>{questions[9].question}</p>
                <input name="button10" htmlFor="answer1" type="radio" value={answer10} onChange={(event) => setAnswer10(event.target.value)}/>
                <label id="answer1">{questions[9].incorrect_answers[0]}</label><br></br>
                <input name="button10" htmlFor="answer4" type="radio" value={answer10} onChange={(event) => setAnswer10(event.target.value)}/>
                <label id="answer4">{questions[9].correct_answer}</label><br></br>
                <input name="button10" htmlFor="answer2" type="radio" value={answer10} onChange={(event) => setAnswer10(event.target.value)}/>
                <label id="answer2">{questions[9].incorrect_answers[1]}</label><br></br> 
                <input name="button10" htmlFor="answer3" type="radio" value={answer10} onChange={(event) => setAnswer10(event.target.value)}/>
                <label id="answer3">{questions[9].incorrect_answers[2]}</label><br></br>
                <hr></hr>
                {/* {questionListItems} */}
           </form>
            
        )

}

export default TodaysQuiz;



