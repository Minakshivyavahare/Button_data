import React from 'react'
import { Card } from 'react-bootstrap';

const CardData = (props) => {
    // console.log(props.result.id);
  return (
    <>
      <Card
        style={{ width: "18rem", margin: "5px", border: "3px solid brown","borderRadius":"10px","marginLeft":'400px',"marginTop":'15px',"box-shadow":"0 15px 50px","transition": "1.0s ease-in-out"
        ,"padding":"10px" ,height:"300px"}} >
       
      
        
       
        <Card.Body>
        <Card.Text style={{'color':'blue',"background":"black"}}><b>Id:{props.result.id}</b></Card.Text>
          <Card.Title style={{'color':"red","fontSize":"8px"}}>
            <h6>{props.result.title}</h6>
          </Card.Title>
          
          <Card.Text style={{fontFamily:'Robotica',"fontStyle":'italic'}}>{props.result.body}</Card.Text>
          
          
        </Card.Body>
      </Card>
    </>
  )
}

export default CardData