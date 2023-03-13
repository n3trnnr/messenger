import React, { useEffect } from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import store from './store';
import './style/messanger.css'

const App = () => {

    useEffect(() => {
        // getData()
        // getDialogues()
    }, [])

    const getData = async () => {
        try {
            const rawData = await fetch('http://localhost:8888/login', {
                method: 'POST',
                body: JSON.stringify({
                    login: 'user1',
                    password: 'user1'
                })
            })
            const data = await rawData.json()
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getDialogues = async () => {
        try {
            const rawData = await fetch('http://localhost:8888/dialogues')
            const data = await rawData.json()
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <Provider store={store}>
                <Router />
            </Provider>
        </main>
    );
}

export default App;