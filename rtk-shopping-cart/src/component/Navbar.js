import { MDBBtn, MDBContainer, MDBInputGroup, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addSeacrhText, getCartTotal } from '../features/cartSlice';

const Navbar = ({data}) => {

   
    const { cart, totalQuantity } = useSelector((state) => state.allCart)
     
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(addSeacrhText(event.target.value));
      };
    
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>


                    <MDBNavbarBrand>ADD TO CART</MDBNavbarBrand>
                    <span>
                        <Link to="/">All Product</Link>
                    </span>
                    
                        <div className="form-outline">
                            <input id="search-focus" type="search"  class="form-control" onChange={handleChange} />
                            <label className="form-label">Search</label>
                        </div>
                        <button type="button" class="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    
                    <MDBBtn color='light'>
                        <Link to='/cart'> Cart({totalQuantity})</Link>
                    </MDBBtn>

                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Navbar