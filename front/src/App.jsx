import React from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import store from './store';
import './style/messanger.css'

const App = () => {
    return (
        <main>
            <Provider store={store}>
                <Router />
            </Provider>
        </main>
    );
}

export default App;