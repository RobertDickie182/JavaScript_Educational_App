import React, { useState, useEffect, useSelector, useDispatch } from 'react'

function Question() {
  const [questions, setQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [options, setOptions] = useState([])

  const score = useSelector((state) => state.score)
  const formattedQuestions = useSelector((state) => state.questions)
  console.log(formattedQuestions)

  useEffect(() => {
    getQuestions();
    }, [])

  const getQuestions = async function () {
      const res = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986')
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
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  const question = questions[questionIndex]
  const answer = question && question.correct_answer

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  useEffect(() => {
    if (!question) {
      return;
    }
    let answers = [...question.incorrect_answers]
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)

    setOptions(answers)
  }, [question])

  const handleListItemClick = (event) => {
    setAnswerSelected(true)
    setSelectedAnswer(event.target.textContent)

    if (event.target.textContent === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })
    }

    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        setAnswerSelected(false)
        setSelectedAnswer(null)

        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,
        })
      }, 2500)
    }
  }

  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }

    if (option === answer) {
      return `correct`
    }

    if (option === selectedAnswer) {
      return `selected`
    }
  }

  if (!question) {
    return <div>Loading</div>
  }

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => (
          <li key={i} onClick={handleListItemClick} className={getClass(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        Score: {score} / {questions.length}
      </div>
    </div>
  )
}
export default Question