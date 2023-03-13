import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../../store/settings'
import '../../style/settings.css'

const UserAccount = () => {

    const userData = useSelector(({ settings }) => settings.userData)
    // console.log('user data: ', userData);

    const dispatch = useDispatch()

    const [editKey, setEditKey] = useState('')
    const [value, setValue] = useState('')
    // console.log({ [editKey]: value });

    const editUserInfo = (key) => {
        setEditKey(key)
        setValue(userData[key])
    }

    const saveUserData = () => {
        dispatch(editUserData({ [editKey]: value }))
        setEditKey('')
        setValue('')
    }

    return (
        <div>
            {Object.keys(userData).map((key, id) => (
                <div className='user-settings-items' key={id}>
                    {key}: {editKey && editKey === key ?
                        <input
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            onBlur={() => saveUserData()}
                        /> :
                        <div onDoubleClick={() => editUserInfo(key)}>{userData[key]}</div>
                    }
                </div>
            ))}
        </div>
    );
}

export default UserAccount;