import { useEffect } from "react";

const ScienceQuiz = () => {
    const [questions, setQuestions] = useState([])


    useEffect(() => {
        getQuestions();

    }, [])
}



