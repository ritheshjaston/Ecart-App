import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logos from '../Images/logo.png'
import '../main.css'
import '../my.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate();
    const logout = async () => {
        await localStorage.removeItem("currentUser");
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img style={{ width: "100px" }} src={logos} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex navsearch" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {localStorage.getItem("currentUser") ? <>
                                <Link to="/cart" className="nav-link" >Cart<i class="fa fa-shopping-cart"></i></Link>
                                <Link onClick={logout} className="nav-link active" aria-current="page" >Log Out</Link>
                            </>
                                : <>
                                    <Link to="/login" className="nav-link active" aria-current="page" ><i class="fa fa-sign-in" />Login</Link>
                                    <Link to="/Register" className="nav-link active" aria-current="page" >Register</Link>
                                </>

                            }


                            {/* <Link to="/additems" className="nav-link active" aria-current="page" >Add Items</Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
