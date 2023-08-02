const initState = {
    questions: [],
    index: 0,
    score: 0,
  }
  const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_LOADING":
      return {
        ...state,
        options: {
          ...state.options,
          loading: action.value
        }
    }
        
        case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.questions,
      }

    case 'SET_INDEX':
      return {
        ...state,
        index: action.index,
      }

    case 'SET_SCORE':
      return {
        ...state,
        score: action.score,
      }

    default:
      return state
  }
}

export default Reducer