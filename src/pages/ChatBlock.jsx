import React from 'react';
import '../style/chatBlock.css'

const ChatBlock = () => {
    return (
        <div className='chat-wrapper'>

            <div className='messages-wrapper'>

                <div>text</div>
                <div>time</div>
            </div>

            <div className='input-menu'>
                <textarea className='input-field'></textarea>
                <button className='send-btn'>Send</button>
            </div>

        </div>
    );
}

export default ChatBlock;