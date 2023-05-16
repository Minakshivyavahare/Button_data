import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div class="card" style={{"width": "35rem","borderRadius":"10px","marginLeft":'400px',"marginTop":'15px',"box-shadow":"0 20px 30px","transition": "1.0s ease-in out"}}>

    <div class="card-body">
        {
            apiData &&
            (apiData).map((apiDetails, index) => {
                return (
                    <div>
                       <h2 style={{"textAlign":"center","color":'blue'}}>{apiDetails.id}</h2>
                        <h6 class="card-title" style={{"textAlign":"center","color":"red"}}>Title:{apiDetails.name}</h6>
                        <p class="card-text" style={{"textAlign":"center",border:'2px solid blue',"borderRadius":"5px","fontSize":"15px","color":"blue"}}><u>BODY:</u>{apiDetails.email}</p>
                    </div>
                )
            })
        }


    </div>
</div>
  )
}

export default UserData