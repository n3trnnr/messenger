import React from 'react';
import '../style/asideBlock.css'
import UsersList from './UsersList';
import avatar from '../assets/avatar.png'

const AsideBlock = ({ usersData }) => {
    console.log('userData: ', usersData);

    return (
        <div className='aside-wrapper'>
            <header>
                <img className='user-avatar' src={avatar} alt="user" />
                <div className='user-name'>Julius</div>
                <div className='num-of-messages'>1</div>
            </header>

            <section>
                {usersData.map((user) => (
                    <UsersList
                        key={user.id}
                        img={user.img}
                        name={user.name}
                        numOfMessages={user.numOfMessages}
                    />)
                )}
            </section>
        </div>
    );
}

export default AsideBlock;