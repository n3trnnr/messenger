import React from "react";

const Message = ({ text, time, isOutgoing }) => {
    return (
        <div className={isOutgoing ? 'message-wrapper-outgoing' : 'message-wrapper-incoming'}>
            <div className='message-text'>{text}</div>
            <div className='message-time'>{time}</div>
        </div>
    )
}

export default Message