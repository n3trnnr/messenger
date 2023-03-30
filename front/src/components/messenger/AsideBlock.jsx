import React, { useMemo } from 'react';
import '../../style/asideBlock.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UsersList from './UsersList';
import Header from '../Header';
import settingsIcon from '../../assets/settings-icon.png'
import Polylogue from './Polylogue';

const AsideBlock = () => {

    const usersData = useSelector((state) => state.messenger.usersList)
    const dialoguesData = useSelector(({ messenger }) => messenger.dialogues)
    // console.log('usersData: ', usersData)
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

    const polylogues = useMemo(() => {
        const polylogue = dialoguesData.filter(({ usersId }) => usersId)
        return polylogue.map((polylogue, id) => {
            const lastMessage = [...polylogue.messages].reverse()
            return (
                <Polylogue
                    key={`polylogue_${id}`}
                    id={polylogue.dialogueId}
                    name={polylogue.name}
                    logo={polylogue.logo}
                    text={lastMessage[0].text || ''}
                    time={lastMessage[0].time || ''}
                />
            )
        })
    }, [dialoguesData])

    return (
        <aside className='aside-wrapper'>
            <Header className='aside-header'>
                <Link to='/settings'>
                    <img src={settingsIcon} alt="settings-icon" className="settings-icon" />
                </Link>
            </Header>

            <section className='users-list'>
                {usersData.map((user, id) => {
                    const lastMessage = getMessagesFromDialogues(user.id)
                    // console.log('lastMessage: ', lastMessage)
                    return (
                        <UsersList
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

                {polylogues}
            </section>
        </aside>
    );
}

export default AsideBlock;