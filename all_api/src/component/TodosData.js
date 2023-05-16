import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const TodosData = () => {
    const[apiData,setApiData]=useState('')
    useEffect(()=>{
       getAllData()
    })
    const getAllData = async() =>{
        const apiResult =await axios.get('https://jsonplaceholder.typicode.com/todos')
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
                        <Card style={{'border':'3px solid blue',"borderRadius":"10px","transition": "1.0s ease-in-out","box-shadow":"0 15px 50px","width":"300px","height":"150px"}}>
                            <Card.Body>
                                <Card.Title>UserId:{apiDetails.userId}</Card.Title>
                                <h6>Id:{apiDetails.id}</h6>
                                <Card.Text style={{"fontStyle":"italic","background":'pink',"marginTop":"30px"}}>
                                   {apiDetails.title}
                                    <h3 className="mt-3" >{apiDetails.completed}</h3>
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

export default TodosData