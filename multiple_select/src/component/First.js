
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'

const First = () => {
    const [selectedOption, setselectedOption] = useState('')
    const[menData,setMenData] = useState([])
    useEffect(()=>{
        const menClothingData = [
            {
                id: 1,
                name: 'T-shirt',
                price: '200'
            },
            {
                id: 2,
                name: 'Jeans',
                price: '400'
            },
            {
                id: 3,
                name: 'Jacket',
                price: '600'
            }
        ]
        
        const womenClothingData =[
            {
                id:1,
                name:'Dress',
                price:'500'
            },
            {
                id:2,
                name:'bottom',
                price:'800'
            }
        ]
    
    const menData = menClothingData.filter(item => item.gender === 'men')  
    setMenData(menData) 
    },[])
    
    return (
        <div>
           
            <Select label="selectedOption" value={selectedOption} onChange={(event) => setselectedOption(event.target.value)}>
               
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
            </Select>
            
            {
                selectedOption === 'men' && (
                    <Select>
                        {
                            menData.map((item) => 
                            
                            {
                             return <MenuItem key={item.id} value={item.name}>
                                    {item.name} ({item.price})
                                </MenuItem>
                            })
                        }
                    </Select>
                )
            }
            {/* {
                selectedOption === 'women' && (
                    <Select>
                        {
                         womenClothingData.map((item) =>{
                            return
                            <MenuItem key={item.id} value={item.id}>
                                {item.name} ({item.price})
                            </MenuItem>
                         })
                        }
                    </Select>
                )
            } */}

        </div>
    )
}

export default First











