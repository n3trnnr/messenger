import React, { useEffect } from 'react';
import '../style/messanger.css'
import ChatBlock from '../components/messenger/ChatBlock';
import AsideBlock from '../components/messenger/AsideBlock';
import { useDispatch } from 'react-redux';
import { setUsers, addUser, setDialogues } from '../store/messanger';
import avatar from '../assets/avatar.png'
import usersData from '../mocks/usersData.json'
import dialoguesData from '../mocks/dialogues.json'

const Messanger = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {

        dispatch(setUsers(usersData.users))
        dispatch(setDialogues(dialoguesData.dialogues))

        const promise = new Promise((resolve, reject) => {
            // console.log('promise')
            setTimeout(() => {
                // console.log('setTimeout')
                // return resolve('succsess')
                return reject('error text')
            }, 2000)
        })

        promise.then((result) => {
            // console.log(result)
        }).catch((error) => {
            // console.log(error)
        })
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
            <main>
                <AsideBlock />
                <ChatBlock />
            </main>
            <div onClick={() => addNewUser()}>ADD USER</div>
        </>
    );
}

export default Messanger;