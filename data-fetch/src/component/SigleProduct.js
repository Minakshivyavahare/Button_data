
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider'
import MyImage from './MyImage';



const SigleProduct = (props) => {

  const [product, setProduct] = useState([])
  
  const Globalstate = useContext(ShopContext)
  const dispatch = Globalstate.dispatch;
 // console.log(Globalstate);

  let params = useParams()
  //console.log(params);
  //console.log(product?.image[0]?.url);
  
 
  const getAllData = async (e) => {
    try {
      const apiResult = await axios.get(`https://api.pujakaitem.com/api/products/${params.id}`)
      setProduct(apiResult.data)
      console.log("25 ,", apiResult);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  useEffect(() => {
    getAllData()
  }, [])
  
  return (
    <>
    
    <div className='container mt-4 l-7'> 
    <div className='row'> 
    <div className='col-md-4 border-end' > 
    <img src={product?.image?.[0]?.url} alt='Product-Image' className='w-100'/>
    {/* <MyImage imgs={image} /> */}
</div>
<div className='col-md-8'>
 <h4>
   {product.name}
  <span className='float-end badge btn-sm btn-danger badge-pil'>Brand</span>
 </h4>
 <p>{product.description}</p>
 <h4 className='mb-1'>
  Rs: {product.price}
  <s className='ms-2'>Rs. 5000</s>
 </h4>
 <div>
  <label className='btn btn-success px-4 mt-2'>In stock</label>
  <div className='row'>
    <div className='col-md-3 mt-3'>
        <div className='input-group'>
          <button type='button' className='input-group-text'>-</button>
          <input type="text" className='form-control text-center' value='1'/>
          <button type='button' className='input-group-text'>+</button>
        </div>
    </div>
    <div className='col-md-3 mt-3'>
    <Link to={`/cart`}>
    
     <button type="button" className='btn btn-primary w-100' onClick={() =>dispatch({type:'ADD',payload:product})}>Add to cart</button>
     </Link>

    </div>
  </div>
 </div>
</div>
</div>

    </div>
    </>
  )
}

export default SigleProduct