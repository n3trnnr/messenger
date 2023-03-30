import ChatBlock from '../components/messenger/ChatBlock';
import AsideBlock from '../components/messenger/AsideBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, setDialogues } from '../store/messenger';
import { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png'
import usersData from '../mocks/usersData.json'
import dialoguesData from '../mocks/dialogues.json'
import Slider from '../components/messenger/Slider'

const Messanger = () => {

    const dispatch = useDispatch()
    const token = useSelector(({ main }) => main.token)

    useEffect(() => {
        dispatch(setDialogues(dialoguesData.dialogues))
        dispatch(setUsers(usersData.users))
        getData()
    }, [])

    const getData = async () => {
        try {
            const rawUsersData = await fetch('http://localhost:8888/users', {
                method: 'POST',
                headers: {
                    'Authorization': token.token
                },
                body: JSON.stringify({
                    token
                })
            })

            const usersData = await rawUsersData.json()
            console.log('usersData: ', usersData);
            // dispatch(setUsers(usersData.users))
        }
        catch (error) {
            console.log(error);
        }

    }

    // const dialogues = async () => {

    //     const rawData = await fetch('http://localhost:8888/dialogues', {
    //         method: 'GET'
    //     })
    //     const data = await rawData.json()
    //     return data.dialogues
    // }
    // console.log('dialogues', dialogues());

    // const promise = new Promise((resolve, reject) => {
    //     resolve(fetch('http://localhost:8888/users', {
    //         method: 'GET'
    //     }))

    //     reject('error')
    // })

    // const usrsData = promise.then((data) => data.json()).then((data) => data.users)
    // const error = promise.catch((value) => console.log(value))
    // console.log('usrsData', usrsData, 'error', error);

    const user = useSelector(({ settings }) => settings.userData)
    const usersList = useSelector(({ messenger }) => messenger.usersList)
    const selectedUserId = useSelector(({ messenger }) => messenger.selectedUserId)
    const [sliderState, setSliderState] = useState(true)
    const [userData, setUserData] = useState(null)
    // console.log('sliderState: ', sliderState, 'seceltedUserId: ', selectedUserId, 'userData: ', userData);

    useEffect(() => {
        if (selectedUserId !== null) {
            setUserData(getUserDataById())
            setSliderState(false)
        } else {
            setSliderState(true)
            setUserData(null)
        }
    }, [selectedUserId])

    const getUserDataById = () => {
        if (Array.isArray(selectedUserId)) {
            const filteredPolylogueUsers = [user]
            selectedUserId.map((selectedId) => {
                const filteredUsersById = usersList.filter(({ id }) => id === selectedId)
                filteredPolylogueUsers.push(...filteredUsersById)
            })
            return filteredPolylogueUsers
        } else {
            for (let user of usersList) {
                if (user.id === selectedUserId) {
                    return [user]
                }
            }
        }
        return false
    }

    return (
        <>
            <>
                <AsideBlock />
                <ChatBlock />
                <Slider
                    isHidden={sliderState}
                    setHidden={setSliderState}
                >
                    {userData && userData.map((user, id) => {
                        return <div className='slider-user-wrapper' key={`sliderUser_${id}`}>
                            <div className='slider-user-name'>{user.name}</div>
                            <img className='slider-user-avatar' src={user.avatar || avatar} alt="avatar" />
                            <div className='slider-user-phone-number'>{user.phoneNumber}</div>
                            <div className='slider-user-bio'>{user.bio}</div>
                        </div>
                    })}
                </Slider>
            </>
        </>
    );
}

export default Messanger;