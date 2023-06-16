
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'



const SigleProduct = (props) => {

  const [product, setProduct] = useState([])
  const [uniqueArray, setUniqueArray] = useState([])

  // let myArr = [];
  // if(!myArr.includes(product.id)){
  //   myArr.push(product.id)

  //   console.log(`data added in the array ${product.id}`);
  //   console.log(myArr.length);
  // }else{
  //   console.log(`data already exist ${product.id}`);
  // }



  let params = useParams()
  // console.log(params);
  // console.log(product);

  useEffect(() => {
    getAllData()

  }, [])

  const getAllData = async (e) => {
    const apiResult = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setProduct(apiResult.data)

  }

  const addData = () => {
    const newData = { ...product }

    newData.find(product.id)

   console.log(newData);
    //  setUniqueArray([...uniqueArray,product.id])
    //  console.log(newData);
    //  setUniqueArray(newData)
    //   console.log(product.id);
    //   console.log(uniqueArray.length);
    //   console.log(product);
  }

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
              <Link to={`/cart/${product.id}`}>
                <Button className='h-20' onClick={addData}><b>ADD TO CART</b></Button>
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