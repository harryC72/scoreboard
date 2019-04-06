import React from 'react';

 const Stats = (props) =>{
  let players = props.players.length;
  let totalPoints = props.players.reduce((total, player)=>{
    return total + player.score
  },0)

  return(
    <table className="stats">
  <tbody>
    <tr>
      <td>Players:</td>
      <td>{players}</td>
    </tr>
    <tr>
      <td>Total Points:</td>
      <td>{totalPoints}</td>
    </tr>
  </tbody>
</table>

  )
}

export default Stats