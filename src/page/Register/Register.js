import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Autcontext } from '../../context/Authprovider/Authprovider';
const Register = () => {
    const [error, seterror] = useState('')
    const [accepted, setaccepted] = useState(false)
    const navigate = useNavigate()
    const { createuser,updateuserprofile } = useContext(Autcontext)
    const handelsubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)
        if (password.length < 6) {
            seterror('Password should be 6 characters ')
            return
        }
        createuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                seterror('')
                handelupdateuserprofile(name,photoURL);
                navigate('/login')
            })
            .catch(error => {
                console.error(error)
                seterror(error.message)
            })

    }

    const handelupdateuserprofile=(name,photoURL)=>
    {
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        updateuserprofile(profile)
        .then(()=>{ })
        
        .catch(error => {
            console.error(error)
        })
    }

    const handelaccep = (event) => {
        setaccepted(event.target.checked)
    }

    return (
        <div className='d-flex justify-content-center align-items-center loginpart'>
            <form onSubmit={handelsubmit} className='w-50  loginform'>
                <div className='login'>
                    <h3 className='text-center'>Register</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                        <input type="text" name='name' placeholder='Full name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">photo URL</label>
                        <input type="text" name='photoURL' placeholder='Photo URL' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' placeholder='email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' placeholder='password' required className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox"  onClick={handelaccep} class="form-check-input" id="exampleCheck1" />
                       
                        <label  >
                            {
                                <>
                                    Accept <Link to={'/terms'}>Treams and consitions</Link>
                                </>
                            }
                        </label>
                    </div>
                    <button type="submit" disabled={!accepted} className="btn btn-primary">Register</button>
                    {/* <Button onClick={handelgoogle} variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button> */}
                </div>
                <p>Already have an account?<Link to={'/login'}>Log in</Link> </p>
                {error}
            </form>
        </div>
    );
};

export default Register;