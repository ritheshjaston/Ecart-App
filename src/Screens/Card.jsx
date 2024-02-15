import React from 'react'
import { Link } from 'react-router-dom'
import '../main.css'
export default function Card() {
    return (
        <div className="col-12 col-md-6 col-lg-3 m-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://www.ooberpad.com/cdn/shop/products/B_WPX7-silver.jpg?v=1670999441" className="card-img-top cardimage" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Product Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex"><h5>Price : &nbsp; </h5> <h3 style={{color:"red"}}>20000</h3></div>
                    <hr />
                    <div><select className="m-2    rounded " style={{height:" 36px",width: "52px",background:"#ffc107"}} >
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            );
                        })}
                    </select>
                    <Link to="" className="btn btn-success"> <i class="fa fa-shopping-cart"> &nbsp;</i>Add to Cart</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
