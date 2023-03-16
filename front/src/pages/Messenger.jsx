import ChatBlock from '../components/messenger/ChatBlock';
import AsideBlock from '../components/messenger/AsideBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addUser, setDialogues } from '../store/messenger';
import { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png'
import usersData from '../mocks/usersData.json'
import dialoguesData from '../mocks/dialogues.json'
import Slider from '../components/messenger/Slider'

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

    // const getData = async () => {
    //     try {
    //         const resolve = await fetch('https://mysafeinfo.com/api/data?list=englishmonarchs&format=json')
    //         const data = resolve.json()
    //         // console.log(data);
    //         // throw 'new error'
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    // const addNewUser = () => {
    //     const newUser = {
    //         id: `id ${usersData.users.length}`,
    //         img: avatar,
    //         name: 'new user',
    //         incomingMessages: 3
    //     }
    //     dispatch(addUser(newUser))
    // }

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
            {/* <div onClick={() => addNewUser()}>ADD USER</div> */}
        </>
    );
}

export default Messanger;