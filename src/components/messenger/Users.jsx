import React from 'react';
import '../../style/users.css'
import noAvatar from '../../assets/avatar.png'
import { useDispatch } from 'react-redux';
import { setDialogueByUserId } from '../../store/messanger';

const UsersList = ({ id, name, avatar, numOfMessages, text, time, isOutgoing }) => {

    const dispatch = useDispatch()

    return (
        <div className='user-wrapper' onClick={() => dispatch(setDialogueByUserId(id))}>
            <img className='user-avatar' src={avatar || noAvatar} alt="user_avatar" />
            <div className='user-name'>{name}</div>
            <div className={numOfMessages === 0 ? 'no-messages' : 'num-of-messages'}>{numOfMessages}</div>
            <div className='incoming-message-wrapper'>
                <div className='incoming-message'>{isOutgoing ? '' : text}</div>
                <div className='message-time'>{isOutgoing ? '' : time}</div>
            </div>

        </div>
    );
}

export default UsersList;