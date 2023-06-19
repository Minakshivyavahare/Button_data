import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { ShopContext } from '../context/ShopContextProvider';





const Cart = () => {

  const Globalstate = useContext(ShopContext)
  const state = Globalstate.state
  const dispatch = Globalstate.dispatch
  // useEffect(() => {
  //     getAllData()

  //   }, [])

  //   const getAllData = async () => {
  //     const apiResult = await axios.get(`https://fakestoreapi.com/products`)
  //     setCart(apiResult.data)


  //   }

  return (
    <Container>
      <Row xs={1} style={{ transition: 'all 0.3s' }}>
        <h4 style={{ textAlign: 'center', padding: '30px' }}><b>SHOPPING CART</b></h4>

        {state.map((item, index) => {
          return (

            <Card style={{ marginTop: '30px' }}>
              <Col>

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

                  <tr style={{ marginBottom: '10px' }}>
                    <td><Image src={item.image} height="60px" width="70px" roundedCircle /></td>

                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <DeleteIcon fontSize="medium" color="warning" style={{ marginTop: '18px', marginLeft: '20px' }} />
                  </tr>
                </Table>
              </Col>

            </Card>

          )
        })}
      </Row>
    </Container>
  )
}

export default Cart