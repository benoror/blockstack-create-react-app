import React, { Component } from 'react';

import './UserInfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.user && this.props.user.name() || 'Nameless',
      avatarUrl: this.props.user && this.props.user.avatarUrl() || undefined
    }
  }

  render() {
    return (
      <div className="UserInfo">
        <img class="avatar" src={this.state.avatarUrl} />
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default UserInfo;
