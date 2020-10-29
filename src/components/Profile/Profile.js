import React from 'react';
import user from '../db/user.json'
import './Profile.css';
import PropTypes from 'prop-types';

function Profile (user) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={user.avatar}
          alt="user avatar"
          class="avatar"
          width="160px"

        />
        <p class="name">{user.name}</p>
        <p class="tag">{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Follower</span>
          <span class="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.defaultpropTypes ={
  img: ""
}

Profile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default Profile;