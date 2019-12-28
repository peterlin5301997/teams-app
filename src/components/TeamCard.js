import React from 'react';

class TeamCard extends React.Component {

  render() {

    return(
      <div className="card-container">
        <div><h2>{ this.props.name }</h2></div>
        <div><h4>{ this.props.venue }</h4></div>
        <button className="btn" onClick={() => this.props.renderRoster(this.props.roster)}>Roster</button>
      </div>
    )
  }
}

export default TeamCard;
