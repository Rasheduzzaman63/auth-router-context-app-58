import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const Header = () => {
    const {user, logOut, signIn} = useContext(authContext)

    const handleLogOut = () =>{
        logOut()
        .then( () =>{})
        .catch(error =>{
            console.error(error)
        })

    }

    const handleLogin = ()=>{
        signIn();
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className="btn btn-ghost normal-case text-xl">RASHED</Link>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
                <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user?.email && <span>Wellcome, {user.email}</span>
                }
                {
                    user?.email? 
                    <button onClick={handleLogOut} className="btn btn-sm">Log Out</button>
                    :
                    <Link to='/login'><button onClick={handleLogin} className="btn btn-sm">Log In</button>
                    </Link>
                    }
            
            </div>
        </div>
    );
};

export default Header;