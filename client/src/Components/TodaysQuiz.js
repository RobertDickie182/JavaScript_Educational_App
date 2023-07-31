import { Link } from 'react-router-dom';


const TodaysQuiz = () => {

    return(
        <>
        <header className='header'>
            <Link to="/articles">Science Hub | </Link>
            <Link to="/todaysquiz">Today's Quiz | </Link>
            <Link to="/topscores">  Top Scores</Link>
        </header>
        </>
    )
};

export default TodaysQuiz;