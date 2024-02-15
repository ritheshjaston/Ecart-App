import React, { useState } from 'react'
import '../my.css'
import { Link, useNavigate } from 'react-router-dom'
export default function AddItem() {

    const [item, setitem] = useState({ pname: "", pprice: "", pimg: "", pcategory: "" ,pdescription:""});
    const navigate = useNavigate();
    const change = (event) => [
        setitem({ ...item, [event.target.name]: event.target.value })
    ]
    const handlesubmit = async (e) => {

    }
    console.log(item);
  return (
    <div>
            <div className="signupmain container">
                <h2>Add Items | E-Cart</h2>

                <br />
                <form onSubmit={handlesubmit}>
                    <label htmlFor="pname" className='formlabel'>Product Name</label> <br />
                    <input type="email" pname='email' className='input' value={item.pname} onChange={change} />
                    <br />
                    <label htmlFor="img" className='formlabel'>Product Image Link</label> <br />
                    <input type="password" name='pimg' className='input' value={item.pimg} onChange={change} />
                    <br />
                    <label htmlFor="category" className='formlabel'>Category</label> <br />
                    <input type="text" name='pcategory' className='input' value={item.pcategory} onChange={change} />
                    <br />
                    <label htmlFor="desc" className='formlabel'>Description</label> <br />
                    <input type="text" name='pdescription' className='input' value={item.pdescription} onChange={change} />
                    <br />
                    <label htmlFor="price" className='formlabel'>Product Price</label> <br />
                    <input type="text" name='pprice' className='input' value={item.pprice} onChange={change} />
                    <button type="submit" className="btn btn-outline-primary buttonform">ADD Product</button>

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
