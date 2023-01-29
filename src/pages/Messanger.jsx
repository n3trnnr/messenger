import React from 'react';
import '../style/messanger.css'
import ChatBlock from './ChatBlock';
import AsideBlock from './AsideBlock';
import avatar from '../assets/avatar.png'

const Messanger = () => {

    const arrOfUsers = [
        {
            id: 'id1',
            img: avatar,
            name: 'user name',
            numOfMessages: 1
        },
        {
            id: 'id2',
            img: avatar,
            name: 'user name1',
            numOfMessages: 5
        },
        {
            id: 'id3',
            img: avatar,
            name: 'user name2',
            numOfMessages: 3
        },
    ]

    return (
        <>
            <main>
                <AsideBlock usersData={arrOfUsers} />
                <ChatBlock />

            </main>
        </>


    );
}

export default Messanger;