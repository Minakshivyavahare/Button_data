import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, } from 'react-bootstrap'


const PhotoData = () => {
  const [apiData, setApiData] = useState('')
  useEffect(() => {
    getAllData()
  }, [apiData])

  const getAllData = async () => {
    const apiResult = await axios.get('https://jsonplaceholder.typicode.com/photos')
    setApiData(apiResult.data)
    console.log(apiResult);
  }

  return (
    <Container>
      <Row>
        {
          apiData &&
          apiData.map((apiDetails) => {
            return (
              <Col lg={4} className='mt-4'>
                <Card style={{ 'border': '5px solid black', "borderRadius": "10px", "transition": "1.0s ease-in-out", "box-shadow": "0 15px 50px" }}>
                <Card.Img variant="top" src={apiDetails.image} height="200vh" />
                  <Card.Body>
                    <Card.Title>AlbumId:{apiDetails.albumId}</Card.Title>
                    <h6 style={{ "color": "red" }}>Id:{apiDetails.id}</h6>
                    <Card.Text style={{ "fontFamily": "Arial", "color": 'purple', "fontSize": "20px", "marginTop": "30px" }}>
                      {apiDetails.title}
                      {apiDetails.thumbnails}
                    </Card.Text>

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

export default PhotoData