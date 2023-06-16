import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './GetData.css';



const GetData = () => {
  const [productData, setProductData] = useState([])
  const [sortOrder, setOrder] = useState('ascending')

  useEffect(() => {
    getAllData()
  }, [])



  const getAllData = async () => {
    const apiResult = await axios.get("https://fakestoreapi.com/products")
    setProductData(apiResult.data)

  }

  const sortedData = (e) => {
    console.log(e.target.value);
    if ("ascending" === e.target.value) {
      const sortedData = [...productData]
      const result = sortedData.sort((a, b) => a.title.localeCompare(b.title))
      setProductData(result);
    } else {
      const sortedDescending = [...productData]
      const result1 = sortedDescending.sort((a, b) => b.title.localeCompare(a.title))
      setProductData(result1);
    }

  }

  return (
    <Container>

       <select onChange={sortedData} style={{padding:'8px 30px',marginTop:'10px',color:'red' ,border:'2px solid blue',fontWeight:'20px'}}>
            <option>Select</option>
            <option value="ascending">A to Z</option>
            <option value="descending">Z to A</option>
        </select> 
      
      <Row>

        {
          productData &&
          productData.map((data, index) => {
            return (
              <Col lg={4} md={4} className='mt-4' key={index}>
                <Card className='card h-100' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.image} height="200vh" width="100px" />
                  <Card.Body>

                    <Card.Text>
                      Title: {data.title}
                    </Card.Text>
                    <Card.Text>
                      Price: {data.price}
                    </Card.Text>


                    <Link to={`single/${data.id}`}>
                      <Button className='h-20'><b>VIEW MORE</b></Button>
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