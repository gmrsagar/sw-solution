import React, { Component } from 'react';

class AcceptedBox extends Component {
  render() {
    return (
       <div class="card white-bg">
        <div class="profile-header card-section">
          <div class="profile-image--holder float-left">
            <div class="profile-image">{this.props.data.contact_name.charAt(0)}</div>
          </div>
          <div class="profile-info">
            <div class="profile-name">{this.props.data.contact_name}</div>
            <div class="profile-time">
                January 4 @ 2:37 pm
                {this.props.data.created_at}
            </div>
          </div>
        </div>
          <div class="separator-line"></div>
          <div class="job-location-info card-section white-bg">
            <div class="job-location float-left">
              <i class="icon fas fa-map-marker-alt"></i>
              <div class="address">{this.props.data.suburb.name + this.props.data.suburb.postcode}</div>
            </div>
            <div class="job-type-info float-left">
              <i class="icon fas fa-briefcase"></i>
              <div class="job-type">{this.props.data.category.name}</div>
            </div>
            <div class="job-id-info">
              <div class="job-id">Job ID: {this.props.data.id}</div>
            </div>
            <div class="job-lead-info">
              <div class="lead-info">${this.props.data.price} lead</div>
            </div>
          </div>
          <div class="separator-line"></div>
          <div class="contact-info card-section">
            <div class="contact-phone float-left">
              <i class="icon fas fa-phone"></i>
              <div class="contact-action"><a href="#">{this.props.data.contact_phone}</a></div>
            </div>
            <div class="contact-email float-left">
              <i class="icon fas fa-envelope"></i>
              <div class="contact-action"><a href="#">{this.props.data.contact_email}</a></div>
            </div>
          </div>
          <div class="job-description-info card-section white-bg">{this.props.data.description}</div>
      </div>
    )
  }
}

export default AcceptedBox