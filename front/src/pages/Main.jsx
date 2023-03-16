import React from 'react';
import { useState } from 'react';
import '../style/authorization.css'

const Main = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    // console.log('login:', login, 'password:', password, 'errors:', errors);

    const submit = (event) => {
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

        if (!password || password.length < 5) {
            errors.push('incorrect password')
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