import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import '../../style/chatBlock.css'
import ChatHeader from './ChatHeader';
import ChatForm from './ChatForm';
import Message from './Message';

const ChatBlock = () => {

    const messagesData = useSelector(({ messenger }) => messenger.dialogue)
    // console.log('messagesData.messages: ', messagesData.messages)

    const usersData = useSelector(({ messenger }) => messenger.usersList)
    // console.log('usersList: ', usersData)

    const setUserHeader = useCallback(() => {
        if (messagesData) {
            for (let user of usersData) {
                if (messagesData.userId === user.id) {
                    return user
                }
            }
        }
        return ''
    }, [messagesData, usersData])

    return (
        <div className='chat-wrapper'>
            <ChatHeader userData={setUserHeader()} />
            <section className='messages-list'>
                {Object.keys(messagesData).length !== 0 &&
                    messagesData.messages.map((message, id) => (
                        <Message
                            key={`message_${id}`}
                            text={message.text}
                            time={message.time}
                            isOutgoing={message.isOutgoing}
                        />
                    ))}
            </section>
            {Object.keys(messagesData).length !== 0 && <ChatForm />}
        </div>
    );
}

export default ChatBlock;