import React, {PureComponent, PropTypes} from 'react'
import Counter from './Counter'

class Player extends PureComponent{

  render(){
    const {removePlayer, id, score, updatePlayerScore, index, players} = this.props;
    return (
      <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={ () => removePlayer(id)}>✖</button>
        {this.props.name}</span>
        
        <Counter 
          score = {score}
          changeScore = {updatePlayerScore}
          index = {index}
          players = {players}
        />
    
      </div>
    )
  }
}

Player.propTypes = {
 name: PropTypes.string.isRequired,
 index: PropTypes.number.isRequired,
 score: PropTypes.number.isRequired,
 removePlayer: PropTypes.func.isRequired,
updatePlayerScore: PropTypes.func.isRequired
}

export default Player