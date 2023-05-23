import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const UserData = () => {
  const[apiData,setApiData]=useState('')
  useEffect(()=>{
     getAllData();
  },[apiData])

  const getAllData =async () =>{
    const apiResult = await axios.get('https://jsonplaceholder.typicode.com/users')
    setApiData(apiResult.data)
  }
  return (
    <Container>
      <Row>
        {
          apiData &&
          apiData.map((apiDetails) => {
            return (
              <Col lg={4} className='mt-4'>
                <Card style={{ 'border': '5px solid white',"backgroundColor":"red" ,"borderRadius": "10px", "transition": "1.0s ease-in-out", "box-shadow": "0 15px 50px" }}>
               
                  <Card.Body>
                    <Card.Title><b>Id:{apiDetails.id}</b></Card.Title>
                    <h5 style={{ "color": "white" }}><b><u>Name:</u></b>{apiDetails.name}</h5>
                    <h4><b><u>Username:{apiDetails.username}</u></b></h4>
                    <Card.Text style={{ "fontFamily": "Arial", "color": 'black',"fontSize": "20px", "marginTop": "30px" }}>
                     <b><u>Email: {apiDetails.email}</u></b>
                     
                    </Card.Text>
                    <Card.Text style={{ "fontFamily": "Arial", "color": 'black', "fontSize": "20px", "marginTop": "30px" }}>
                    <b><u>Address:{apiDetails.address.city}-Zipcode:{apiDetails.address.zipcode}-
                     Suite:{apiDetails.address.suite}</u></b>
                     
                    </Card.Text>
                    <Card.Text style={{ "fontFamily": "Arial", "color": 'black', "fontSize": "20px", "marginTop": "30px" }}>
                    <b><u>Phone: {apiDetails.phone}</u></b> 
                    </Card.Text>

                  
                  <Card.Text style={{ "fontFamily": "Arial", "color": 'black', "fontSize": "20px", "marginTop": "30px" }}>
                     <b><u>Company:{apiDetails.company.name} -CatchPhrase:{apiDetails.company.catchPhrase}</u></b> 
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

export default UserData;