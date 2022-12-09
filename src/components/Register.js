import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/UserContext';

const Register = () => {
    const [error, setError] = useState('')
    const [submitSuccess, setSubmitSuccess] = useState('')
    const {register, signWithGoogle} = useContext(authContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        register(email, password)
        .then(result =>{
            const user= result.user;
            setSubmitSuccess(user)
            form.reset();
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })

    }

    const googleLogin = () =>{
        signWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>
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
                                    <Link to='/login' href="#" className="label-text-alt link link-hover">Already have an Account?</Link>
                                </label>
                            </div>
                            <p>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                submitSuccess && <p>Created User Successfully.</p>
                            }
                        </form>
                        <button onClick={googleLogin} className="btn success">Normal</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;