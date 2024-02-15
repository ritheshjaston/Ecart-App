import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
export default function Signin() {
  let navigate=useNavigate();
    const [credentials, setcredentials]=useState({email:"",password:""});

    const handlesubmit= async(e)=>{
        
    }
    const change=(event)=>[
      setcredentials({...credentials,[event.target.name]:event.target.value})
    ]
    console.log(credentials)
    return (
      <div>
        <div className="signupmain container">
          <h2>Sign In | Food App</h2>
          <br />
          <br />
              <form onSubmit={handlesubmit}>
                  <label htmlFor="email" className='formlabel'>Email</label> <br />
                  <input type="email" name='email' className='input' value={credentials.email} onChange={change}/>
                  <br />
                  <label htmlFor="email" className='formlabel'>Password</label> <br />
                  <input type="password" name='password' className='input' value={credentials.password} onChange={change}/>
                  <br />

                  <button type="submit" className="btn btn-outline-primary buttonform" >Sign In</button>
                  <Link to="/Register" className="btn btn-outline-danger buttonalreadyuser" >Don't have account?signup </Link>
                  <br />
                 
              </form>
        </div>
      </div>
    )
}