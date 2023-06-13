import React, { useState } from 'react'

const SelectData = () => {
    const[data,setData] = useState('')
    
    
    const changeValue = (e) =>{
        setData(e.target.value)
         console.log(e.target.value);
    }
    
  return (
    <div>
        <select value={data} onChange={changeValue}>
            <option>Select</option>
            <option>A to Z</option>
            <option>Z to A</option>
        </select>
        <h4>{data}</h4>
    </div>
  )
}

export default SelectData