import React, { useEffect } from 'react';
import Cardcart from './Cardcart';
import '../my.css'
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = JSON.parse(localStorage.getItem("Products")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const u_id = currentUser ? currentUser.u_id : null;
  let total = 0;
  const navigate = useNavigate();
  const handleremptycart = () => {
    localStorage.removeItem("cart");
    navigate('/');
  }
  return (
    <div>
      <h2 style={{ color: "black", textAlign: "center", fontFamily: "monospace", marginTop: "20px", fontSize: "30px" }}>Cart</h2>
      <div className="container">
        {
          cart.length > 0 ?
            cart
              .filter((data) => data.userId === u_id)
              .map((data) => {
                const product = products.find((p) => p.prod_id === data.prod_id);
                if (product) {
                  total = total +(parseInt(product.pprice)*parseInt(data.qty));
                  return (
                    <Cardcart
                      key={product.prod_id}
                      amt={product.pprice}
                      qty={data.qty}
                      pname={product.pname}
                      img={product.pimg}
                    />
                  );
                }
                return null;
              })
            :
            <h2 className='emptycart'>Cart is Empty</h2>
        }

      </div>
      <br />
      {cart.length > 0 ? <>
        <hr />
        <div className='cal'>
          <b>Grand total:  </b> <span>{total}</span><br /><br />
          <button onClick={handleremptycart} style={{ background: "red" }}>Empty Cart</button>

        </div>
      </> : ""}
    </div>
  );
}
