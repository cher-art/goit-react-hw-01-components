import React from 'react';
import styles from './friendsList.module.css';
import PropTypes from 'prop-types'


const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
      <li className={styles.item} id={friend.id}>
        <span className={ 
          friend.isOnline ? styles.statusOnline : styles.statusOffline 
          }></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li> 
      ))}
      
    </ul>
  );
};

FriendsList.defaultpropType = {
  avatar: ''
}


FriendsList.propType = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default FriendsList;