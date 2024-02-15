import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Caurosal from './Caurosal'
import Card from './Card'
import '../App.css'
export default function Home() {
    return (
        <div>
            <Navbar />
           <div className="container"> <h1 className="textabovecaurosol">Anything, anytime, <br />anywhere</h1></div>
            <Caurosal />
            <div className='subcarddiv container '>
                <div className="row mb-3">

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>  
            </div>
            <div class="container">
            <hr />
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                        <li class="nav-item"><Link to="/login" class="nav-link px-2 text-muted">Signin</Link></li>
                        <li class="nav-item"><Link to="/Register" class="nav-link px-2 text-muted">Register</Link></li>
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">FAQs</Link></li>
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">About</Link></li>
                    </ul>
                    <p class="text-center text-muted">© 2024 Company, Inc</p>
                </footer>
            </div>
        </div>
    )
}
