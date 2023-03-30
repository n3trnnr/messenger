import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../store/main';
import '../style/authorization.css'

const Main = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    // console.log('login:', login, 'password:', password, 'errors:', errors);

    const submit = async (event) => {
        event.preventDefault()
        setErrors([])
        const errors = []

        if (
            !login ||
            login.length < 5 ||
            login.length > 15 ||
            !([...login].some(item => Number.isInteger(+item)))//Number.isInteger - является ли число целым, +item - сокращенная записть parseInt()
        ) {
            errors.push('incorrect login')
        }

        if (!password || password.length < 4) {
            errors.push('incorrect password')
        }

        if (errors.length === 0) {
            try {
                const rawData = await fetch('http://localhost:8888/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        login: login,
                        password: password
                    })
                })
                const data = await rawData.json()
                console.log(data);

                if (data.token) {
                    dispatch(setToken(data))
                    navigate('/messenger')
                }
                else {
                    throw new ('error')
                }

            }
            catch (error) {
                errors.push('login or password incorrect');
            }
        }
        setErrors([...errors])
    }

    return (
        <form className='authorization-form' onSubmit={(event) => submit(event)}>
            {errors && errors.map((error, id) => (
                <div key={`error_${id}`} style={{ color: 'red' }}>
                    {error}
                </div>
            ))}
            <label htmlFor='login'>
                <div className='login-input-name'>login</div>
                <input placeholder='enter your login' type="text" name='login' onChange={(event) => { setLogin(event.target.value) }} />
            </label>
            <label htmlFor='password'>
                <div className='password-input-name'>password</div>
                <input placeholder='enter your password' type="password" name="password" onChange={(event) => { setPassword(event.target.value) }} />
            </label>
            <button className='login-btn'>login</button>
        </form>
    );
}

export default Main;