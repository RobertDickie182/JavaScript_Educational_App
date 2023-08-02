import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function FinalScreen() {
    const score = useSelector((state) => state.score)
  
    const dispatch = useDispatch()
  
    const replay = () => {
      dispatch({
        type: 'SET_INDEX',
        index: 0,
      })
  
      dispatch({
        type: 'SET_SCORE',
        score: 0,
      })
    }

return (
  <div>
    <h3>Final Score: {score}</h3>
    <button onClick={replay}>Try again</button>
  </div>
  )
}

export default FinalScreen