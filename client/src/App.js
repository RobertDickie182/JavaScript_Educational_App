import './App.css';
import Reducer from './Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ScienceHubContainer from './Containers/ScienceHubContainer';


function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }
  
  return (   
    <ScienceHubContainer/>
    );
}

export default App;
