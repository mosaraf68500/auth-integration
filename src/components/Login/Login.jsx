import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { FirebaseAuthContex } from '../../Contex/FirebaseAuthContex/FirebaseAuthContex';

const Login = () => {

    const {LoginUser}=use(FirebaseAuthContex);
    const navigate=useNavigate()
  

    const handleLogin=(e)=>{
        e.preventDefault();
        const target=e.target;
        const email=target.email.value;
        const password=target.password.value;
        console.log(email,password)

        // login user

        LoginUser(email,password)
        .then(result =>{
            console.log(result)
            navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
    <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}  className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New user in this site please <Link to="/register" className='text-blue-400 underline'> Rigister</Link></p>
      </div>
    </div>
  
    );
};

export default Login;