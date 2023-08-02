import './App.css';
import { useSelector } from 'react-redux'
import ScienceHubContainer from './Containers/ScienceHubContainer';
import Question from './Components/Question'
import FinalScreen from './Components/FinalScreen'


function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <FinalScreen />
  }
  
  return (   
    <ScienceHubContainer/>
    );
}

export default App;
