import React, {PropTypes} from 'react'
import { updatePlayerScore } from '../actions/player';

const Counter = ({index, updatePlayerScore, score}) =>{


    return(
      <div className="counter">
        <button className="counter-action decrement" onClick = {() => updatePlayerScore(index, -1)}>-</button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick = {() => updatePlayerScore(index, 1)} >+</button>
      </div>
    )
}

Counter.propTypes ={
  index: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired
}

export default Counter