import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className='user-card'>
        { user.id }
        { user.username }
        { user.name }
        { user.avatarUrl }
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
