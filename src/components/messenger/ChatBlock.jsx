import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/chatBlock.css'

const ChatBlock = () => {

    const messages = useSelector((state) => state.messenger.chats)

    console.log('Messages: ', messages);

    return (
        <div className='chat-wrapper'>

            <div className='messages-list'>
                {Object.keys(messages).map((message) => (
                    <div key={message} className='message-wrapper'>

                        {console.log(messages[message])}

                        <div className='message-text'>{messages[message].text}</div>
                        <div className='message-time'>{messages[message].time}</div>
                    </div>
                ))}
            </div>

            <div className='input-menu'>
                <textarea className='input-field'></textarea>
                <button className='send-btn'>Send</button>
            </div>

        </div>
    );
}

export default ChatBlock;