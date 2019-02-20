import React, { Component } from 'react';

class InvitedBox extends Component {

  render() {
    return (
            <div className="card white-bg">
                <div className="profile-header card-section">
                    <div className="profile-image--holder float-left">
                        <div className="profile-image">{this.props.data.contact_name.charAt(0)}</div>
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            {this.props.data.contact_name}
                        </div>
                        <div className="profile-time">
                            {this.props.data.created_at}
                        </div>
                    </div>
                </div>
            <div className="job-location-info card-section white-bg">
                <div className="job-location float-left">
                    <i className="icon fas fa-map-marker-alt"></i>
                    <div className="address">{this.props.data.suburb.name + ' ' + this.props.data.suburb.postcode}</div>
                </div>
                <div className="job-type-info float-left">
                    <i className="icon fas fa-briefcase"></i>
                    <div className="job-type">{this.props.data.category.name}</div>
                </div>
                <div className="job-id-info">
                    <div className="job-id">Job ID: {this.props.data.id}</div>
                </div>
            </div>
            <div className="separator-line"></div>
            <div className="job-description-info card-section white-bg">{this.props.data.description}</div>
            <div className="separator-line"></div>
            <div className="white-bg card-section">
                <div className="action-buttons">
                    <button className="button button-primary" onClick={ () => this.props.statusUpdate(this.props.data.id, 'accepted')}>Accept</button>
                    <button className="button button-secondary" onClick={ () => this.props.statusUpdate(this.props.data.id, 'rejected')}>Decline</button>
                </div>
                <div className="lead-info">
                    <span className="rate">${this.props.data.price}</span> Lead invitation
                </div>
            </div>
        </div>
    )
  }
}

export default InvitedBox