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

const result = apiResult.data.sort((a,b) => a.title.localeCompare(b.title))
   setProductData(result)
export default SelectData