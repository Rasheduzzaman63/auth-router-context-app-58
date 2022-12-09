import React, { useContext } from 'react';
import { authContext } from '../context/UserContext';

const Home = () => {
    const {user} = useContext(authContext)
    return (
        <div>
            <h1 className='text-4xl'>{user?.email}</h1>
            <h1>HOme page</h1>
        </div>
    );
};

export default Home;