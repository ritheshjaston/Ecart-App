import React from 'react'
import Home from '../Screens/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from '../Screens/Register'
import Signin from '../Screens/Signin'
import AddItem from '../Admin/AddItem'
import Cart from '../User/Cart'
import Adminlogin from '../Admin/Adminlogin'
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Register' element={<Register />} />
                    <Route exact path='/login' element={<Signin />} />
                    <Route exact path='/additems' element={<AddItem />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/admin' element={<Adminlogin />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
