import React, { Component } from 'react';

class Tab extends Component {
  render() {
    return (
      <div className="header-tabs text-center white-bg">
          <div 
            className={"tab float-left " + ((this.props.selected === 'invited') ? "active" : "") }
            onClick={() => this.props.onTabClick('invited')}
            >Invited</div>
          <div
            className={"tab " + ((this.props.selected === 'accepted') ? "active" : "") }
            onClick={() => this.props.onTabClick('accepted')}
            >Accepted</div>
      </div>
    )
  }
} 

export default Tab