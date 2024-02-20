import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../main.css'
export default function Card(props) {
    const [quantity, setquantity] = useState(1);
    const addcart = (e) => {
        // Get user ID from localStorage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const u_id = currentUser ? currentUser.u_id : null;

        if (!u_id) {
            console.error("User ID not found. Please make sure the user is logged in.");
            return;
        }

        // Get the existing cart from localStorage or initialize an empty array
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Get quantity from the input field with id 'qty'


        // Create data object for the new item
        const newItem = {
            userId: u_id,
            prod_id: e,
            qty: quantity
        };

        console.log(newItem, "cart data");

        // Combine the existing cart with the new item
        const updatedCart = [...cart, newItem];

        console.log(updatedCart, "cart updated data");

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        console.log(e);
        document.getElementById(e).style.color = "green";
        document.getElementById(`${e}1`).style.color = "red";
    }

    return (
        <div className="col-12 col-md-6 col-lg-3 m-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top cardimage" alt="..." />
                <div className="card-body">
                    <div style={{height: "29px",overflow: "hidden"}}>

                        <h5 className="card-title">{props.name}</h5>
                    </div>
                    <div className='dec'>

                        <p className="card-text">{props.desc}</p>
                    </div>
                    <div className="d-flex"><h5>Price : &nbsp; </h5> <h3 id={props.prod_id} style={{ color: "red" }}>{props.price * quantity}</h3></div>
                    <hr />
                    {

                        localStorage.getItem("currentUser") && (JSON.parse(localStorage.getItem("currentUser"))).email != "admin@gmail.com" ? <>
                            <div><select id='qty' className="m-2 rounded " style={{ height: " 36px", width: "52px", background: "#ffc107" }} onChange={(e) => setquantity(e.target.value)}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                                <Link id={(props.prod_id) + "1"} onClick={() => addcart(props.prod_id)} className="btn btn-success"> <i class="fa fa-shopping-cart"> &nbsp;</i>Add to Cart</Link>
                            </div>
                        </> : ""
                    }
                </div>
            </div>

        </div>
    )
}
