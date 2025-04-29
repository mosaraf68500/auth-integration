import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';

const Register = () => {

    const handleRegister=(e)=>{
        e.preventDefault();
        const target=e.target;
        const name=target.name.value;
        const email=target.email.value;
        const password=target.password.value;
        console.log(name, email, password)

        // authentication

        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input name='name' type="text" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p>Already Have an account please <Link to="/login" className='text-blue-400 underline'> Login</Link></p>
          </div>
        </div>
    );
};

export default Register;