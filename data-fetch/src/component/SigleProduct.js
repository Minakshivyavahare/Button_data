
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider'



const SigleProduct = (props) => {

  const [product, setProduct] = useState([])
  
  const Globalstate = useContext(ShopContext)
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  let params = useParams()
  //console.log(product);
  
  useEffect(() => {
    getAllData()

  }, [])

  const getAllData = async (e) => {
    const apiResult = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setProduct(apiResult.data)

  }
  
  // const addData = () => {
  //   // const newData = { ...product }
  //   // console.log(newData);
  //   // setUniqueArray([...uniqueArray,product.id])
    
     
  // }

  
  return (
    <Container>
     
      <Row style={{ height: '20rem' }}>
        <Col lg={4} className='mt-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} height="200vh" width="300px" />
            <Stack direction="horizontal" gap={2} className='stack-button'>
              <Button as="a" variant="primary">
                BUY NOW
              </Button>
              <Link to={`/cart`}>
                <Button className='h-20' onClick={() =>dispatch({type:'ADD',payload:product})}><b>ADD TO CART</b></Button>
              </Link>

            </Stack>
          </Card>
        </Col>
        <Col lg={4} className='mt-4'>
          <Card className='card2'>
            <Card.Body>

              <Card.Text>
                Title: {product.title}
              </Card.Text>
              <Card.Text>
                Price: {product.price} {props.title}
              </Card.Text>
              <Card.Text>
                Description: {product.description}
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}

export default SigleProduct