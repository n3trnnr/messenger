import React, { useEffect } from 'react';
import '../style/messanger.css'
import ChatBlock from '../components/messenger/ChatBlock';
import AsideBlock from '../components/messenger/AsideBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addUser } from '../store/messanger';
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

    const usersList = useSelector((state) => state.messenger.usersList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsers(arrOfUsers))
    }, [])

    const addNewUser = () => {
        const newUser = {
            id: `id ${usersList.length}`,
            img: avatar,
            name: 'new user',
            numOfMessages: 3
        }
        dispatch(addUser(newUser))
    }

    return (
        <>
            <main>
                <AsideBlock usersData={usersList} />
                <ChatBlock />

            </main>
            <div onClick={() => addNewUser()}>add user</div>
        </>


    );
}

export default Messanger;