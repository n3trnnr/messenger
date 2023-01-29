import React from 'react';
import '../style/usersList.css'

const UsersList = ({ img, name, numOfMessages }) => {
    return (
        <div className='usersList-wrapper'>
            <img className='user-avatar' src={img} alt="user_avatar" />
            <div className='user-name'>{name}</div>
            <div className='num-of-messages'>{numOfMessages}</div>
        </div>
    );
}

export default UsersList;