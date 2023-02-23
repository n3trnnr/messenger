import React, { useEffect } from 'react';
import ChatBlock from '../components/messenger/ChatBlock';
import AsideBlock from '../components/messenger/AsideBlock';
import { useDispatch } from 'react-redux';
import { setUsers, addUser, setDialogues } from '../store/messenger';
import avatar from '../assets/avatar.png'
import usersData from '../mocks/usersData.json'
import dialoguesData from '../mocks/dialogues.json'

const Messanger = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
        // getData()
    }, [])

    const fetchData = () => {
        dispatch(setUsers(usersData.users))
        dispatch(setDialogues(dialoguesData.dialogues))
    }

    const getData = async () => {
        try {
            const resolve = await fetch('https://mysafeinfo.com/api/data?list=englishmonarchs&format=json')
            const data = resolve.json()
            // console.log(data);
            // throw 'new error'
        }
        catch (e) {
            console.log(e);
        }
    }

    const addNewUser = () => {
        const newUser = {
            id: `id ${usersData.users.length}`,
            img: avatar,
            name: 'new user',
            incomingMessages: 3
        }
        dispatch(addUser(newUser))
    }

    return (
        <>
            <>
                <AsideBlock />
                <ChatBlock />
            </>
            {/* <div onClick={() => addNewUser()}>ADD USER</div> */}
        </>
    );
}

export default Messanger;