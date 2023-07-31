import { Link } from "react-router-dom";
import './ScienceHubCss.css'

const TopScores = () => {

    return (
        <header className='header'>
        <Link to="/articles">Science Hub | </Link>
        <Link to="/todaysquiz">Today's Quiz | </Link>
        <Link to="/topscores">  Top Scores</Link>
        </header>
    )


}

export default TopScores;