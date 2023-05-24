import { MDBBtn, MDBContainer, MDBInputGroup, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal } from '../features/cartSlice'

const Navbar = () => {

    const {cart,totalQuantity} = useSelector((state)=> state.allCart)

    const dispatch = useDispatch();

    useEffect(() =>{
       dispatch(getCartTotal())
    },[cart])

    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>


                    <MDBNavbarBrand>ADD TO CART</MDBNavbarBrand>
                    <span>
                        <Link to="/">All Product</Link>
                    </span>
                    <MDBBtn color='light'>
                      <Link to='/cart'> Cart({totalQuantity})</Link>  
                    </MDBBtn>

                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Navbar