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

            <>
            <div className="question">
            <p>{questions[0].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[0].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[0].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[0].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[0].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[0].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[0].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[0].correct_answer)}
                />
                <label id="answer4">
                    {questions[0].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[1].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[1].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[1].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[1].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[1].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[1].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[1].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[1].correct_answer)}
                />
                <label id="answer4">
                    {questions[1].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[2].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[2].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[2].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[2].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[2].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[2].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[2].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[2].correct_answer)}
                />
                <label id="answer4">
                    {questions[2].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[3].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[3].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[3].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[3].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[3].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[3].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[3].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[3].correct_answer)}
                />
                <label id="answer4">
                    {questions[3].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[4].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[4].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[4].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[4].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[4].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[4].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[4].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[4].correct_answer)}
                />
                <label id="answer4">
                    {questions[4].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[5].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[5].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[5].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[5].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[5].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[5].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[5].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[5].correct_answer)}
                />
                <label id="answer4">
                    {questions[5].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[6].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[6].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[6].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[6].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[6].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[6].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[6].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[6].correct_answer)}
                />
                <label id="answer4">
                    {questions[6].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>
            <div className="question">
            <p>{questions[7].question}</p>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer1"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[7].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[7].incorrect_answers[0]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer2"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[7].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[7].incorrect_answers[1]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer3"
                    type="radio"
                    value={answer1}
                    onClick={() => setAnswer1(questions[7].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[7].incorrect_answers[2]}
                </label>
            </div>
            <div className="answer">
                <input
                    name="button"
                    htmlFor="answer4"
                    type="radio"
                    value={answer1}
                    onClick={(event) => setAnswer1(questions[7].correct_answer)}
                />
                <label id="answer4">
                    {questions[7].correct_answer}
                </label>
            </div>
            <hr></hr>
        </div>

        </>
            
        )

}

export default TodaysQuiz;



