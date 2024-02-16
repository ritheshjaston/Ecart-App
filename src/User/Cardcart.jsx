import React from 'react'
import '../my.css'
export default function Cardcart() {
    return (
        <div className='cartcard'>
            <div className=' cartItems'>
                <img src="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?w=740&t=st=1708052167~exp=1708052767~hmac=5c26fbd20c4dcaec3e6de1adfe9b9e1683e2a2ab57d8e66bbd4f15421c66f943" alt="" srcset="" />
                <div>
                    <h3>Product Name</h3>
                    <h5>Quantity :&nbsp;&nbsp;<span>20</span>&nbsp;pieces  </h5>
                </div>
                <div className='amtdesc'>

                <h5>Amount : <span>4050050</span> </h5>
                </div> 
            </div>
        </div>
    )
}
