import React from 'react';

import Player from './Player';

class TeamCard extends React.Component {

  render() {

    return(
      <div>
        <div>{ this.props.name }</div>
        <div>{ this.props.venue }</div>
        <button onClick={() => this.props.renderRoster(this.props.roster)}>roster link</button><br/><br/>
      </div>
    )
  }
}

export default TeamCard;
