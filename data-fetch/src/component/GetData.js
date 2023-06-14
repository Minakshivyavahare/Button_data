import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const GetData = () => {
 const[productData,setProductData]=useState([])
 const[sortOrder,setOrder]=useState('ascending')

  useEffect(() => {
    getAllData()
  }, [])



  const getAllData = async () => {
    const apiResult = await axios.get("https://fakestoreapi.com/products")
    setProductData(apiResult.data)
    
  }
 
  // const sortProducts = () =>{
  //   const sortedProduct = [...productData]
    
  //   sortedProduct.sort((a,b) =>{
  //     if(a.title === b.title){
  //     return -1;
  //     }
  //   })
    
  //   console.log(sortedProduct)
  // }
  
  const sortedData = () =>{
    const sortedData = [...productData]
    const result = sortedData.sort((a,b) => a.title.localeCompare(b.title))
    setProductData(result);
  }
  const descendingData = () =>{
    const sortedDescending = [...productData]
     const result1 = sortedDescending.sort((a,b) => b.title.localeCompare(a.title))
     setProductData(result1);
  }
  return (
    <Container>
      {/* <select value="" onChange={sortProducts}>
        <option>select option</option>
        <option value="ascending">A to Z</option>
        <option value="descending">Z to A</option>
      </select> */}
      <button onClick={sortedData}>Ascending</button>
      <button onClick={descendingData}>Descending</button>
      <Row>

        {
          productData &&
          productData.map((data) => {
            return (
              <Col lg={4} className='mt-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.image} height="200vh" width="300px" />
                  <Card.Body>

                    <Card.Text>
                      Title: {data.title}
                    </Card.Text>
                    <Card.Text>
                      Price: {data.price}
                    </Card.Text>


                    <Link to={`single/${data.id}`}>
                      <Button>Buy</Button>
                    </Link>
                   
                  </Card.Body>

                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default GetData