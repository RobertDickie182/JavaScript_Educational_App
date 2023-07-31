import './App.css';
import ScienceHubContainer from './Containers/ScienceHubContainer';
import ErrorPage from "./Components/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  
  return (   
  <Router>     
      <Routes>
        <Route path="/articles" element={<ScienceHubContainer heading="Science Hub"/>}/>
        {/* <Route path="/todaysquiz" element={<TodaysQuiz heading="Today's Quiz"/>}/> 
        <Route path="/topscores" element={<TopScores heading="Top Scores"/>}/> */}
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    
  </Router>
    );
}

export default App;
