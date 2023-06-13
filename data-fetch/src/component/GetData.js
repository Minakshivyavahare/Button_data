import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap'

const GetData = () => {
  const [userData, setData] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        setData(response.data)
      })
  }, [])
  return (
    <div>
   
      {
        userData.map((data) => {
          return (
            
            <Card style={{ width: '18rem', marginTop: '20px', marginLeft: '30rem',flexDirection:'column',border:'3px solid red',background:'blue',color:'white' }}>
              <Card.Body>
                <Card.Title>Id: {data.id}</Card.Title>
                <Card.Text>
                  Title: {data.title}
                </Card.Text>
                <Card.Text>
                  Price: {data.price}
                </Card.Text>

              </Card.Body>
            </Card>
           
          )
        })
      }
     
    </div>
  )
}

export default GetData