import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardData from './CardData'

const PostData = () => {
    const[apiData,setApiData]=useState('')

    useEffect(() =>{
        getAllData();
    },[apiData])

    const getAllData =async () =>{
        const ApiResult = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setApiData(ApiResult.data)
    }

    return (
        <Container>
            
            
                {
                    apiData &&
                    (apiData).map((item)=>{
                        return <CardData result={item}/>
                    })
                }
            
           
        </Container>
    )
}

export default PostData









    