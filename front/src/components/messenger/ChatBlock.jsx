import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import '../../style/chatBlock.css'
import ChatHeader from './ChatHeader';
import ChatForm from './ChatForm';
import Message from './Message';

const ChatBlock = () => {

    const messagesData = useSelector(({ messenger }) => messenger.currentDialog)
    // console.log('messagesData.messages: ', messagesData.messages)

    const usersData = useSelector(({ messenger }) => messenger.usersList)
    // console.log('usersList: ', usersData)

    const userData = useSelector(({ settings }) => settings.userData)

    const setDialogueHeader = useCallback(() => {
        if (messagesData) {
            for (let user of usersData) {
                if (messagesData.userId === user.id) {
                    return user
                }
            }
        }
        if (messagesData.usersId) {
            return messagesData
        }
        return false
    }, [messagesData])

    const getDataAboutPolylogueUsers = useCallback(() => {
        if (messagesData.usersId) {
            const polylogueUserData = []
            for (let user of usersData) {
                for (let i of messagesData.usersId) {
                    if (i === user.id) {
                        polylogueUserData.push(user)
                    }
                }
            }
            return polylogueUserData
        }
        return false
    }, [messagesData])

    // console.log('getDataAboutPolylogueUsers: ', getDataAboutPolylogueUsers());

    return (
        <div className='chat-wrapper'>
            <ChatHeader usersData={setDialogueHeader()} />

            <section className='messages-list'>
                {Object.keys(messagesData).length > 0 &&
                    [...messagesData.messages].reverse().map((message, id) => (
                        <Message
                            key={`message_${id}`}
                            text={message.text}
                            time={message.time}
                            isOutgoing={message.isOutgoing || message.userId}
                            usersData={getDataAboutPolylogueUsers() || setDialogueHeader()}
                            userData={userData}
                        />
                    ))}
            </section>

            {Object.keys(messagesData).length !== 0 && <ChatForm />}
        </div>
    );
}

export default ChatBlock;