import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const SigleProduct = (match) => {
   
  const[product,setProduct]=useState([])

  let params = useParams()
  console.log(params);

  useEffect(() => {
    getAllData()
    
  }, [])

  const getAllData = async () => {
    const apiResult = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setProduct(apiResult.data)
    console.log(match);
    
  }

  return (
    <Container>
      <Row>
      <Col lg={4} className='mt-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.image} height="200vh" width="300px" />
                  <Card.Body>

                    <Card.Text>
                      Title: {product.title}
                    </Card.Text>
                    <Card.Text>
                      Price: {product.price}
                    </Card.Text>  
     
                  </Card.Body>

                </Card>
              </Col>
       
      </Row>
    </Container>
  )
}

export default SigleProduct