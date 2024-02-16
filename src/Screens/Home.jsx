import React from 'react'
import logos from '../Images/logo.png'
import { Link } from 'react-router-dom'

import Caurosal from './Caurosal'
import Card from './Card'
import '../App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import '../main.css'
import '../my.css'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
    const [foodcat, setfoodcat] = useState([{
        _id: 1,
        CategoryName: "Beauty"
    }, {
        _id: 2,
        CategoryName: "Mobiles"
    }, {
        _id: 3,
        CategoryName: "Fashion"
    }, {
        _id: 4,
        CategoryName: "Electronics"
    }, {
        _id: 5,
        CategoryName: "Appliances"
    }, {
        _id: 6,
        CategoryName: "Toys"
    }
    ]);
    const [fooditems, setfooditems] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() => {
        const Alldata = JSON.parse(localStorage.getItem("Products"));
        setfooditems(Alldata);
        console.log(Alldata, "all data")
    }, []);

    const logout = async () => {
        await localStorage.removeItem("currentUser");
        navigate('/login');
    }
    return (
        <div>
            {/* Navbar start */}

            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#"><img style={{ width: "100px" }} src={logos} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <form className="d-flex navsearch" >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}
                                onChange={(e) => { setsearch(e.target.value) }} />
                        </form>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {localStorage.getItem("currentUser") ? <>
                                    {
                                        (JSON.parse(localStorage.getItem("currentUser"))).email == "admin@gmail.com" ?
                                            <><Link to="/additems" className="nav-link" >Add Items<i class="fa fa-shopping-cart"></i></Link>
                                                <Link onClick={logout} className="nav-link active" aria-current="page" >Log Out</Link>
                                            </>
                                            :
                                            <><Link to="/cart" className="nav-link" >Cart<i class="fa fa-shopping-cart"></i></Link>
                                                <Link onClick={logout} className="nav-link active" aria-current="page" >Log Out</Link>
                                            </>

                                    }
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
            {/* Navbar end */}
            <h1 className="textabovecaurosol">Anything, anytime, <br />anywhere</h1>
            <Caurosal />
            <div >
                <br />
                {
                    (foodcat != null && fooditems != null && foodcat.length > 0) ? foodcat.map((data) => {
                        const filteredItems = fooditems.filter((item) => (item.pcategory == data.CategoryName) && item.pname.toLowerCase().includes(search.toLowerCase()));

                        return (
                            filteredItems.length > 0 && (
                                <div className="container subcarddiv" key={data._id}>
                                    <h4>{data.CategoryName}</h4>
                                    <div style={{ color: "white" }} className="row mb-3">
                                        {filteredItems.map((fdata) => (
                                            <div key={fdata.prod_id} className="col-12 col-md-6 col-lg-3 m-3">
                                                <Card prod_id={fdata.prod_id} name={fdata.pname} desc={fdata.pdescription} img={fdata.pimg} price={fdata.pprice} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        );
                    }) : ""
                }


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
