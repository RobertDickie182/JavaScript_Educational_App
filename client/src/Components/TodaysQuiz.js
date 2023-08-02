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

    // const [score, setScore] = useState(0);
    
    // const [answers, setAnswers] = useState({ - this is linked to function on line 57 and is using a loop rather than the 10 if statements we are using.
    //     1: "",
    //     2: "",
    //     3: "",
    //     4: "",
    //     5: "",
    //     6: "",
    //     7: "",
    //     8: "",
    //     9: "",
    //     10: ""
    // })

    useEffect(() => {
        getQuestions();

    }, [])

    const getQuestions = async function () {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986")
        const questions = await res.json();
        const formattedQuestions = questions.results.map((result) => ({
            ...result,
            question: decodeURIComponent(result.question),
            correct_answer: decodeURIComponent(result.correct_answer),
            incorrect_answers: result.incorrect_answers.map((answer) => (
                decodeURIComponent(answer)
            ))
        }))
        setQuestions(formattedQuestions)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let correctAnswers = 0;  

        // for  (let key in Object.keys(answers)) {  -- see above
        //     if (answers[key] === questions[key - 1].correct_answer){
        //         correctAnswers++
        //     }
        // }

    
        if (answer1 === questions[0].correct_answer) {
            correctAnswers++
        }
        if (answer2 === questions[1].correct_answer) {
            correctAnswers++
        }
        if (answer3 === questions[2].correct_answer) {
            correctAnswers++
        }
        if (answer4 === questions[3].correct_answer) {
            correctAnswers++
        }
        if (answer5 === questions[4].correct_answer) {
            correctAnswers++
        }
        if (answer6 === questions[5].correct_answer) {
            correctAnswers++
        }
        if (answer7 === questions[6].correct_answer) {
            correctAnswers++
        }
        if (answer8 === questions[7].correct_answer) {
            correctAnswers++
        }
        if (answer9 === questions[8].correct_answer) {
            correctAnswers++
        }
        if (answer10 === questions[9].correct_answer) {
            correctAnswers++
        }
        
        if (correctAnswers === 10) {
            alert(`You are a genius, you have scored a perfect 10!`)
        }

        alert(`You've scored ${correctAnswers} out of 10!`) 
        event.target.reset()

    }

    

        

        if (questions.length === 0 ) {
            return <p className="showarticlebody">"loading..."</p>
        }

    return (


        

            <form onSubmit={handleSubmit}>
            <h1 className="showarticletitle">Let's test your knowledge!</h1>
            <div className="showarticlebody">
            <p>{questions[0].question}</p>
            <div className="showarticlebody">
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
            <div className="showarticlebody">
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
            <div className="showarticlebody">
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
            <div className="showarticlebody">
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
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[1].question}</p>
            <div className="showarticlebody">
                <input
                    name="button1"
                    htmlFor="answer1"
                    type="radio"
                    value={answer2}
                    onClick={() => setAnswer2(questions[1].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[1].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button1"
                    htmlFor="answer2"
                    type="radio"
                    value={answer2}
                    onClick={() => setAnswer2(questions[1].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[1].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button1"
                    htmlFor="answer3"
                    type="radio"
                    value={answer2}
                    onClick={() => setAnswer2(questions[1].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[1].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button1"
                    htmlFor="answer4"
                    type="radio"
                    value={answer2}
                    onClick={(event) => setAnswer2(questions[1].correct_answer)}
                />
                <label id="answer4">
                    {questions[1].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[2].question}</p>
            <div className="showarticlebody">
                <input
                    name="button2"
                    htmlFor="answer1"
                    type="radio"
                    value={answer3}
                    onClick={() => setAnswer3(questions[2].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[2].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button2"
                    htmlFor="answer2"
                    type="radio"
                    value={answer3}
                    onClick={() => setAnswer3(questions[2].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[2].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button2"
                    htmlFor="answer3"
                    type="radio"
                    value={answer3}
                    onClick={() => setAnswer3(questions[2].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[2].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button2"
                    htmlFor="answer4"
                    type="radio"
                    value={answer3}
                    onClick={(event) => setAnswer3(questions[2].correct_answer)}
                />
                <label id="answer4">
                    {questions[2].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[3].question}</p>
            <div className="showarticlebody">
                <input
                    name="button3"
                    htmlFor="answer1"
                    type="radio"
                    value={answer4}
                    onClick={() => setAnswer4(questions[3].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[3].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button3"
                    htmlFor="answer2"
                    type="radio"
                    value={answer4}
                    onClick={() => setAnswer4(questions[3].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[3].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button3"
                    htmlFor="answer3"
                    type="radio"
                    value={answer4}
                    onClick={() => setAnswer4(questions[3].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[3].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button3"
                    htmlFor="answer4"
                    type="radio"
                    value={answer4}
                    onClick={(event) => setAnswer4(questions[3].correct_answer)}
                />
                <label id="answer4">
                    {questions[3].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[4].question}</p>
            <div className="showarticlebody">
                <input
                    name="button4"
                    htmlFor="answer1"
                    type="radio"
                    value={answer5}
                    onClick={() => setAnswer5(questions[4].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[4].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button4"
                    htmlFor="answer2"
                    type="radio"
                    value={answer5}
                    onClick={() => setAnswer5(questions[4].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[4].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button4"
                    htmlFor="answer3"
                    type="radio"
                    value={answer5}
                    onClick={() => setAnswer5(questions[4].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[4].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button4"
                    htmlFor="answer4"
                    type="radio"
                    value={answer5}
                    onClick={(event) => setAnswer5(questions[4].correct_answer)}
                />
                <label id="answer4">
                    {questions[4].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[5].question}</p>
            <div className="showarticlebody">
                <input
                    name="button5"
                    htmlFor="answer1"
                    type="radio"
                    value={answer6}
                    onClick={() => setAnswer6(questions[5].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[5].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button5"
                    htmlFor="answer2"
                    type="radio"
                    value={answer6}
                    onClick={() => setAnswer6(questions[5].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[5].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button5"
                    htmlFor="answer3"
                    type="radio"
                    value={answer6}
                    onClick={() => setAnswer6(questions[5].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[5].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button5"
                    htmlFor="answer4"
                    type="radio"
                    value={answer6}
                    onClick={(event) => setAnswer6(questions[5].correct_answer)}
                />
                <label id="answer4">
                    {questions[5].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[6].question}</p>
            <div className="showarticlebody">
                <input
                    name="button6"
                    htmlFor="answer1"
                    type="radio"
                    value={answer7}
                    onClick={() => setAnswer7(questions[6].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[6].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button6"
                    htmlFor="answer2"
                    type="radio"
                    value={answer7}
                    onClick={() => setAnswer7(questions[6].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[6].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button6"
                    htmlFor="answer3"
                    type="radio"
                    value={answer7}
                    onClick={() => setAnswer7(questions[6].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[6].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button6"
                    htmlFor="answer4"
                    type="radio"
                    value={answer7}
                    onClick={(event) => setAnswer7(questions[6].correct_answer)}
                />
                <label id="answer4">
                    {questions[6].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[7].question}</p>
            <div className="showarticlebody">
                <input
                    name="button7"
                    htmlFor="answer1"
                    type="radio"
                    value={answer8}
                    onClick={() => setAnswer8(questions[7].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[7].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button7"
                    htmlFor="answer2"
                    type="radio"
                    value={answer8}
                    onClick={() => setAnswer8(questions[7].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[7].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button7"
                    htmlFor="answer3"
                    type="radio"
                    value={answer8}
                    onClick={() => setAnswer8(questions[7].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[7].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button7"
                    htmlFor="answer4"
                    type="radio"
                    value={answer8}
                    onClick={(event) => setAnswer8(questions[7].correct_answer)}
                />
                <label id="answer4">
                    {questions[7].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[8].question}</p>
            <div className="showarticlebody">
                <input
                    name="button8"
                    htmlFor="answer1"
                    type="radio"
                    value={answer9}
                    onClick={() => setAnswer9(questions[8].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[8].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button8"
                    htmlFor="answer2"
                    type="radio"
                    value={answer9}
                    onClick={() => setAnswer9(questions[8].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[8].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button8"
                    htmlFor="answer3"
                    type="radio"
                    value={answer9}
                    onClick={() => setAnswer9(questions[8].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[8].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button8"
                    htmlFor="answer4"
                    type="radio"
                    value={answer9}
                    onClick={(event) => setAnswer9(questions[8].correct_answer)}
                />
                <label id="answer4">
                    {questions[8].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
            <div className="showarticlebody">
            <p>{questions[9].question}</p>
            <div className="showarticlebody">
                <input
                    name="button9"
                    htmlFor="answer1"
                    type="radio"
                    value={answer10}
                    onClick={() => setAnswer10(questions[9].incorrect_answers[0])}
                />
                <label id="answer1">
                    {questions[9].incorrect_answers[0]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button9"
                    htmlFor="answer2"
                    type="radio"
                    value={answer10}
                    onClick={() => setAnswer10(questions[9].incorrect_answers[1])}
                />
                <label id="answer2">
                    {questions[9].incorrect_answers[1]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button9"
                    htmlFor="answer3"
                    type="radio"
                    value={answer10}
                    onClick={() => setAnswer10(questions[9].incorrect_answers[2])}
                />
                <label id="answer3">
                    {questions[9].incorrect_answers[2]}
                </label>
            </div>
            <div className="showarticlebody">
                <input
                    name="button9"
                    htmlFor="answer4"
                    type="radio"
                    value={answer10}
                    onClick={(event) => setAnswer10(questions[9].correct_answer)}
                />
                <label id="answer4">
                    {questions[9].correct_answer}
                </label>
            </div>
            <hr className="linequiz"></hr>
        </div>
        <button className="buttonquiz" role="button">Results!</button>
        <p className="showarticletitle">Well done, you have scored </p>
        </form>
            
        )


}

export default TodaysQuiz;



