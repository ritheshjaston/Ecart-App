import React, { useState } from 'react'
import '../my.css'
import { Link, useNavigate } from 'react-router-dom'
export default function AddItem() {

    const [item, setitem] = useState({ pname: "", pprice: "", pimg: "", pcategory: "", pdescription: "" });
    const navigate = useNavigate();
    let initialvalue;
    if (localStorage.getItem("Products") == null) {
        initialvalue = [];
    } else {
        initialvalue = JSON.parse(localStorage.getItem("Products"));
    }

    const [value, setvalue] = useState(initialvalue);
    console.log(value);

    const change = (e) => {
        setitem({ ...item, [e.target.name]: e.target.value });
        console.log(item);
    }
    const handler = () => {
        const prodid = value.length == 0 ? 1 : value[value.length - 1].u_id + 1;
        const details = {
            prod_id: prodid, ...item
        }
        const finalitem=[...value,details];
        setvalue(finalitem);
        localStorage.setItem("Products", JSON.stringify(finalitem))
        alert("Products Added...!")
        setitem({ pname: "", pprice: "", pimg: "", pcategory: "", pdescription: "" })
    }
    return (
        <div>
            <div className="signupmain container">
                <h2>Add Product | E-Cart</h2>

                <br />
                
                    <label htmlFor="pname" className='formlabel'>Product Name</label> <br />
                    <input type="text" name='pname' className='input' value={item.pname} onChange={change} />
                    <br />
                    <label htmlFor="img" className='formlabel'>Product Image Link</label> <br />
                    <input type="text" name='pimg' className='input' value={item.pimg} onChange={change} />
                    <br />
                    <label htmlFor="category" className='formlabel'>Category</label> <br />
                    <select name='pcategory' className='form-select input' value={item.pcategory} onChange={change}>
                        <option value="" style={{color:"#dfe0e4"}}>Select</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Toys">Toys</option>
                        <option value="Beauty">Beauty</option>
                    </select>
                    <label htmlFor="desc" className='formlabel'>Description</label> <br />
                    <input type="text" name='pdescription' className='input' value={item.pdescription} onChange={change} />
                    <br />
                    <label htmlFor="price" className='formlabel'>Product Price</label> <br />
                    <input type="number" name='pprice' className='input' value={item.pprice} onChange={change} />
                    <button onClick={handler} className="btn btn-outline-primary buttonform">ADD Product</button>

                    <br />
                    <br />
                    <br />

                
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
