import React, { useState } from 'react'

const Normal = () => {
    const[array,setArray] = useState([])

    const checkData = () =>{
        const newData = {id:1,name:'Apple'}
       setArray([...array ,newData])
       console.log(newData.length);
    }
  return (
    <div>
        <button onClick={checkData}>Add Data</button>
    </div>
  )
}

export default Normal