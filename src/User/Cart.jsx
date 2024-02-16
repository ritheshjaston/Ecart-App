import React from 'react'
import Cardcart from './Cardcart'
export default function Cart() {
  return (
    <div>
        <h2 style={{color:"black",textAlign:"center",fontFamily:"monospace",marginTop:"20px",fontSize:"30px"}}>Cart</h2>
      <div className="container">
            <Cardcart/>
            <Cardcart/>
            <Cardcart/>
            <Cardcart/>
      </div>
    </div>
  )
}
