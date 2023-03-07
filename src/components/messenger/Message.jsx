import React from "react";
import noAvatar from '../../assets/avatar.png'

const Message = ({ text, time, isOutgoing, usersData, userData }) => {
    // console.log('usersData: ', usersData, 'isOutoing: ', isOutgoing);

    const setUserAvatars = () => {
        const setAvatar = !isOutgoing ? usersData.avatar || noAvatar : userData.avatar || noAvatar

        if (Array.isArray(usersData) && isOutgoing) {
            const setPolylogueUserAvatars = usersData.filter(({ id }) => id === `${isOutgoing}`)
            if (setPolylogueUserAvatars.length > 0) {
                return setPolylogueUserAvatars[0].avatar;
            }
        }

        return setAvatar
    }

    return (
        <div className="message-content-container">
            <img className="user-message-avatar" src={setUserAvatars()} alt="avatar" />
            <div className={isOutgoing === true ? 'message-wrapper-outgoing' : 'message-wrapper-incoming'}>
                <div className='message-text'>{text}</div>
                <div className='message-time'>{time}</div>
            </div>
        </div>
    )
}

export default Message