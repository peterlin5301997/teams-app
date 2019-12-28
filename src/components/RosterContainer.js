import React from 'react';

import Player from './Player';

class RosterContainer extends React.Component {

  state = {
    roster: []
  }

  componentDidMount() {
    fetch(this.props.roster)
    .then(res => res.json())
    .then(data => {
      this.setState({ roster: [...data.roster] })
    })
  }

  render() {

    const players = this.state.roster.map(player => {
      return (
        <Player
          key={player.person.id}
          name={player.person.fullName}
          age={player.person.currentAge}
          height={player.person.height}
          weight={player.person.weight}
          position={player.person.primaryPosition.name}
        />
      )
    })

    console.log(this.props.roster)

    return(
      <div>
        <h1>RosterContainer</h1>
        <div className="container-column2">
          { players }
        </div>
      </div>
    )
  }

}

export default RosterContainer;
