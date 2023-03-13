import React from 'react';
import UserPage from './messenger/UserPage';

const Header = ({ children }) => {
    // console.log(children);//Link
    return (
        <header className='aside-header'>
            <UserPage />
            {children}
        </header>
    );
}

export default Header;