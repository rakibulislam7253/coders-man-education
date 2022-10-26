import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Autcontext } from '../../context/Authprovider/Authprovider';

const Login = () => {
    const [error, seterror] = useState('')
    const navigate = useNavigate()
    const { providerlogin, signin } = useContext(Autcontext)
    const googleauth = new GoogleAuthProvider()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';


    const handelgoogle = () => {
        providerlogin(googleauth)
            .then(result => {
                const user = result.user
                console.log(user)
             navigate(from,{replace:true })
            })
            .catch(error => {
                console.error(error)
            })
    }


//login form

    const handelsignin = (event) => {
        event.preventDefault();
        const form = event.target

        const email = form.email.value
        const password = form.password.value
        console.log(email, password)


        signin(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                seterror('')
                navigate(from,{replace:true })
            })
            .catch(error => {
                console.error(error)
                seterror(error.message)
            })
    }





    return (

        <div>
            <div className=' d-flex justify-content-center align-items-center form '>

                <form onSubmit={handelsignin} className='w-75 '>
                    <div className='login'>
                        <h3 className='text-center'>LogIn</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' placeholder='email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' placeholder='password' required className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-info w-100">Login</button>
                        <Button onClick={handelgoogle} variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>
                    </div>
                    <p>New to EdTech <Link to={'/register'}>create a new account</Link> </p>
                    {error}
                </form>

            </div>
        </div>
    );
};

export default Login;