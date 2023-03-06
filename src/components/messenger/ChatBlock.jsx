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
        if (messagesData && messagesData.usersId) {
            return messagesData
        }
        return false
    }, [messagesData])

    const getDataAboutPolylogueUsers = () => {
        if (messagesData && messagesData.usersId) {
            const usersDataArr = []
            for (let user of usersData) {
                for (let i of messagesData.usersId) {
                    if (`${i}` === user.id) {
                        usersDataArr.push(user)
                    }
                }
            }
            return usersDataArr
        }
        return false
    }

    // console.log(getDataAboutPolylogueUsers());

    return (
        <div className='chat-wrapper'>
            <ChatHeader usersData={setDialogueHeader()} />

            <section className='messages-list'>
                {Object.keys(messagesData).length !== 0 &&
                    messagesData.messages.map((message, id) => (
                        <Message
                            key={`message_${id}`}
                            text={message.text}
                            time={message.time}
                            isOutgoing={message.isOutgoing}
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