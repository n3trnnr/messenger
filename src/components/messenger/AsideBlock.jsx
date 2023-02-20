import React from 'react';
import '../../style/asideBlock.css'
import Users from './Users';
import UserPage from './UserPage';
import { useSelector } from 'react-redux';

const AsideBlock = () => {

    const usersData = useSelector((state) => state.messenger.usersList)
    const dialoguesData = useSelector(({ messenger }) => messenger.dialogues)
    // console.log('dialoguesData: ', dialoguesData)

    const getMessagesFromDialogues = (userId) => {
        for (let dialogue of dialoguesData) {
            // console.log('getMssgsFromDlgs: ', [...dialogue.messages][0])
            if (dialogue.userId === userId) {
                return [...dialogue.messages].reverse()
            }
        }
        return []
    }

    return (
        <div className='aside-wrapper'>
            <header className='aside-header'>
                <UserPage />
            </header>

            <section className='users-list'>
                {usersData.map((user, id) => {
                    const lastMessage = getMessagesFromDialogues(user.id)
                    // console.log('lastMessage: ', lastMessage)
                    return (
                        <Users
                            key={`user_${id}`}
                            id={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            // numOfMessages={user.incomingMessages}
                            text={lastMessage[0].text || ''}
                            time={lastMessage[0].time || ''}
                            isOutgoing={lastMessage[0].isOutgoing || ''}
                        />)
                })}
            </section>
        </div>
    );
}

export default AsideBlock;