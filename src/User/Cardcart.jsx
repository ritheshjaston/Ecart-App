import React from 'react'
import '../my.css'
export default function Cardcart(props) {
    return (
        <div className='cartcard'>
            <div className=' cartItems'>
                <img src={props.img} alt="" srcset="" />
                <div>
                    <h3>{props.pname}</h3>
                    <h5>Quantity :&nbsp;&nbsp;<span>{props.qty}</span>&nbsp;pieces  </h5>
                    <h5>Total :&nbsp;&nbsp;<span>{props.qty * props.amt}</span>  </h5>
                </div>
                <div className='amtdesc'>

                <h5>Price : <span>{props.amt}</span> </h5>
                </div> 
            </div>
        </div>
    )
}
