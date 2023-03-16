import React from 'react';
import '../../style/users.css'
import noAvatar from '../../assets/avatar.png'
import { useDispatch } from 'react-redux';
import { setDialogueByUserId } from '../../store/messenger';

const UsersList = ({ id, name, avatar, numOfMessages, text, time, isOutgoing }) => {

    const dispatch = useDispatch()

    return (
        <div className='user-wrapper' onClick={() => dispatch(setDialogueByUserId(id))}>
            <img className='aside-block-user-avatar' src={avatar || noAvatar} alt="user_avatar" />
            {/* <div className={numOfMessages === 0 ? 'no-messages' : 'aside-block-num-of-messages'}>{numOfMessages}</div> */}
            <div className='aside-block-incoming-message-wrapper'>
                <div className='aside-block-user-name'>{name}</div>
                <div className='aside-block-incoming-message'>{text}</div>
                <div className='aside-block-message-time'>{time}</div>
            </div>

        </div>
    );
}

export default UsersList;