import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {

    const[cart,setCart]= useState([])

    let {id} = useParams()
    
     
    useEffect(() => {
        getAllData()
    
      }, [])
    
      const getAllData = async () => {
        const apiResult = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setCart(apiResult.data)
        
    
      }
    
  return (
    <Container>
      <Row xs={1} style={{transition:'all 0.3s'}}>
       <Card style={{marginTop:'30px'}}>
        <Col>
        <h4 style={{textAlign:'center',padding:'30px'}}><b>SHOPPING CART</b></h4>
        <Table style={{}}>
          <thead>
        <tr >
          <th>ITEM</th>
          <th>TITLE</th>
          <th>PRICE</th>
          <th>REMOVE</th>
          <th>TOTAL</th>

        </tr>
        </thead>
          <tr style={{marginBottom:'10px'}}>
            <td><Image src={cart.image} height="60px" width="70px" roundedCircle /></td>
           
            <td>{cart.title}</td>
            <td>{cart.price}</td>
            <DeleteIcon fontSize="medium" color="warning" style={{marginTop:'18px',marginLeft:'20px'}}/>
          </tr>
        </Table>
        </Col>
       
        </Card>
      </Row>
    </Container>
  )
}

export default Cart