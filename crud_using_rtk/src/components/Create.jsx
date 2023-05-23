import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate();
   
    const dispatch = useDispatch()

    const[users,setUsers] = useState({})

    const getUserData = (e) =>{

        setUsers({...users, [e.target.name]: e.target.value})

        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createUser(users))
        console.log(users);

        navigate("/read")
    }

    return (
        
      
        <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
            <h2>Fill the Data</h2>
            <div class="form-group">
                <label>Name</label>
                <input type="name" class="form-control"  name="name" placeholder="Enter name" onChange={getUserData}  />

            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="Enter Email" onChange={getUserData} />
            </div>

            <div class="mb-3 my-2">
                <input class="form-check-input" type="radio" name='gender' value="Male" checked  onChange={getUserData} />
                <label class="form-check-label">
                    Male
                </label>
            </div>
            <div class="mb-3">
                <input class="form-check-input" type="radio" name='gender' value="Female"  onChange={getUserData} />
                <label class="form-check-label">
                    Female
                </label>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    )
}

export default Create