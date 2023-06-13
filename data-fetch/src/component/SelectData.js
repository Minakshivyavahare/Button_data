import React, { useState } from 'react'

const SelectData = () => {
    const[data,setData] = useState('')
    
    const changeOption = (e) =>{
        console.log(e);
    }
    const changeValue = (e) =>{
         console.log(e.target.value);
    }
    
  return (
    <div>
        <select onChange={changeValue}>
            <option>Select</option>
            <option value="A">A to Z</option>
            <option value="Z">Z to A</option>
        </select>
    </div>
  )
}

export default SelectData