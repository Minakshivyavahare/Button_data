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
    try {
      const apiResult = await axios.get("https://api.pujakaitem.com/api/products")
    setProductData(apiResult.data)  
    console.log(apiResult.data.length)     
    } catch (error) {
      console.log(error);
    }
    
  }

  const sortedData = (e) => {
    console.log(e.target.value);
    if ("ascending" === e.target.value) {
      const sortedData = [...productData]
      const result = sortedData.sort((a, b) => a.name.localeCompare(b.name))
      setProductData(result);
    } else {
      const sortedDescending = [...productData]
      const result1 = sortedDescending.sort((a, b) => b.name.localeCompare(a.name))
      setProductData(result1);
    }
    if("low" === 'e.target.value'){
       const sortedLow = [...productData]
       const result3 = sortedLow.sort((a,b) => a.price-b.price)
       console.log(result3);
       setProductData(result3)
    }else{
      const sortedHigh = [...productData]
      const result4 = sortedHigh.sort((a,b) => b.price -a.price)
      setProductData(result4)
    }

  }

  return (
    <Container>
       <h4>Total Product:{productData?.length}</h4>
       <select onChange={sortedData} style={{padding:'8px 30px',marginTop:'10px',color:'red' ,border:'2px solid blue',fontWeight:'20px'}}>
            <option>Preferences</option>
            <option value="ascending">A to Z</option>
            <option value="descending">Z to A</option>
            <option value="low">low to high</option>
            <option value="high">high to low</option>
        </select>
       
      <Row>

        {
          productData &&
          productData.map((data, index) => {
            return (
             
              <Col lg={4} md={4} className='mt-4' key={index}>
                
                
                <Card className='card h-100' style={{ width: '18rem' }}>
                <Link to={`single/${data.id}`} style={{textDecoration:'none'}}>
                  <Card.Img variant="top" src={data.image} height="200vh" width="100px" />
                  <Card.Body>

                    <Card.Text>
                       {data.name}
                    </Card.Text>
                    <Card.Text>
                      Price: {data.price}
                    </Card.Text>


                    

                  </Card.Body>
                  </Link> 
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