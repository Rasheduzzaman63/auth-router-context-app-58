import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const Login = () => {
    const {signIn} = useContext(authContext)

    const [errorPassword, setErrorPassword] = useState('');
    const [signInSuccess, setSignInSuccess] = useState('');
    const Navigate = useNavigate()
   

    const handleSubmit = event =>{
        event.preventDefault();
    const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
        .then(result =>{
            const user = result.user
            setSignInSuccess(user)
            Navigate('/')
            form.reset();
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
            setErrorPassword(error.message)
        })
    }

    

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' href="#" className="label-text-alt link link-hover">Are You New User?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p>{errorPassword}</p>
                                {
                                    signInSuccess && <p>Successfully Login</p>
                                }
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;