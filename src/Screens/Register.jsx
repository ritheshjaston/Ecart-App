import React, { useState } from 'react'
import '../my.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Register() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const navigate = useNavigate();
    const change = (event) => [
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    ]
    const handlesubmit = async (e) => {

    }
    console.log(credentials);
    return (
        <div>
            <div className="signupmain container">
                <h2>Sign Up | E-Cart</h2>

                <br />
                <form onSubmit={handlesubmit}>
                    <label htmlFor="email" className='formlabel'>Email</label> <br />
                    <input type="email" name='email' className='input' value={credentials.email} onChange={change} />
                    <br />
                    <label htmlFor="email" className='formlabel'>Password</label> <br />
                    <input type="password" name='password' className='input' value={credentials.password} onChange={change} />
                    <br />
                    <label htmlFor="name" className='formlabel'>Name</label> <br />
                    <input type="text" name='name' className='input' value={credentials.name} onChange={change} />
                    <br />
                    <label htmlFor="location" className='formlabel'>Location</label> <br />
                    <input type="text" name='geolocation' className='input' value={credentials.geolocation} onChange={change} />
                    <button type="submit" className="btn btn-outline-primary buttonform">Signup now</button>
                    <Link to="/login" className="btn btn-outline-danger buttonalreadyuser" >Already have account?signin </Link>

                    <br />
                    <br />
                    <br />

                </form>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
