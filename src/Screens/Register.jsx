import React, { useState } from 'react'
import '../my.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Register() {
    const [data, setdata] = useState({ name: "", email: "", password: "", geolocation: "" });
    const navigate = useNavigate();
    const [state, setstate] = useState();

    //to manage from replacing
    let initialvalue;
    if (localStorage.getItem("RegesteredUser") == null) {
        initialvalue = [];
    } else {
        initialvalue = JSON.parse(localStorage.getItem("RegesteredUser"));
    }

    const [value, setvalue] = useState(initialvalue);
    console.log(value);
    const change = (event) => [
        setdata({ ...data, [event.target.name]: event.target.value })
    ]
    let a=0;
    const handlesubmit = async (e) => {
        value.map((user) => {
            if (user.email == data.email) {
               a=1
            }
        })
        if (a) {
            
            navigate('/login');
            console.log(data.email, "User Email")
        } else {
            const Userid = value.length == 0 ? 1 : value[value.length - 1].u_id + 1;
            const details = {
                u_id: Userid, ...data
            }
            const finaldata = [...value, details];
            setvalue(finaldata);
            localStorage.setItem("RegesteredUser", JSON.stringify(finaldata))
            alert("Registration Successful!")
            navigate('/');
        }
    }
    console.log(data);
    return (
        <div>
            <div className="signupmain container">
                <h2>Sign Up | E-Cart</h2>

                <br />
                <form onSubmit={handlesubmit}>
                    <label htmlFor="email" className='formlabel'>Email</label> <br />
                    <input type="email" name='email' className='input' value={data.email} onChange={change} />
                    <br />
                    <label htmlFor="email" className='formlabel'>Password</label> <br />
                    <input type="password" name='password' className='input' value={data.password} onChange={change} />
                    <br />
                    <label htmlFor="name" className='formlabel'>Name</label> <br />
                    <input type="text" name='name' className='input' value={data.name} onChange={change} />
                    <br />
                    <label htmlFor="location" className='formlabel'>Location</label> <br />
                    <input type="text" name='geolocation' className='input' value={data.geolocation} onChange={change} />
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
