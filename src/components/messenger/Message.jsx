import React from "react";
import noAvatar from '../../assets/avatar.png'

const Message = ({ text, time, isOutgoing, usersData, userData }) => {

    console.log('usersData: ', usersData, 'isOutoing: ', isOutgoing);

    // const setPolylogueUsers = () => {
    //     if (usersData) {
    //         for (let user of usersData) {
    //             return user;
    //         }
    //     }
    // }

    // console.log(setPolylogueUsers());

    return (
        <div className="message-content-container">
            <img className="user-message-avatar" src={isOutgoing === false ? usersData.avatar || noAvatar : userData.avatar || noAvatar} alt="avatar" />
            <div className={isOutgoing ? 'message-wrapper-outgoing' : 'message-wrapper-incoming'}>
                <div className='message-text'>{text}</div>
                <div className='message-time'>{time}</div>
            </div>
        </div>
    )
}

export default Message