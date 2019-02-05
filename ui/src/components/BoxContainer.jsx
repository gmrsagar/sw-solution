import React, { Component } from 'react';
import InvitedBox from './InvitedBox';
import AcceptedBox from './AcceptedBox';

class BoxContainer extends Component {
  render() {
    return (
      <div className="cards-container">
        { (this.props.selected === 'invited') ?
        this.props.invited.map( data => {
          return <InvitedBox key={data.id} data={data} statusUpdate={this.props.updateJob}/>
        })
        :
        this.props.accepted.map( data => {
          return <AcceptedBox key={data.id} data={data} statusUpdate={this.props.updateJob}/>
        })
        }
      </div>
    )
  }
}

export default BoxContainer