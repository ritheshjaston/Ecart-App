import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Signin() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const [value, setvalue] = useState([]);
  let a = 0;
  useEffect(() => {
    const Alldata = JSON.parse(localStorage.getItem("RegesteredUser"));
    console.log(Alldata)
    setvalue(Alldata);
    console.log(value);

  }, [])
  const handlesubmit = async (e) => {
    value.map((user) => {
      if (user.email == credentials.email && user.password == credentials.password) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        alert("Login Successful..")
        a = 1;
      }
    })
    if (a) {
      navigate('/')
    }else{
      alert("Sign Up first ...")
      navigate('/Register')
    }
  }

  const change = (event) => [
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  ]
  console.log(credentials)
  return (
    <div>
      <div className="signupmain container">
        <h2>Sign In | E-Cart</h2>
        <br />
        <br />
        {/* <form > */}
          <label htmlFor="email" className='formlabel'>Email</label> <br />
          <input type="email" name='email' className='input' value={credentials.email} onChange={change} />
          <br />
          <label htmlFor="email" className='formlabel'>Password</label> <br />
          <input type="password" name='password' className='input' value={credentials.password} onChange={change} />
          <br />

          <button onClick={handlesubmit} className="btn btn-outline-primary buttonform" >Sign In</button>
          <Link to="/Register" className="btn btn-outline-danger buttonalreadyuser" >Don't have account?signup </Link>
          <br />
          <br />
          <br />

        {/* </form> */}
      </div>
    </div>
  )
}