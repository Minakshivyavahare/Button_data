import {  MenuItem, Select, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'


const Third = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDress, setSelectedDress] = useState([]);
    const [womenDress, setWomenDress] = useState('');
    const[myState,setMyState] = useState([])
    
    
    const [clothingData, setClothingData] = useState({
        men: {
            tShirts: [
                { id: 1, name: 'Crew neck', color:"white" ,price: '$20' },
                { id: 2, name: 'V-neck',color:'black', price: '$25' },
                { id: 3, name: 'Polo', color:'navy' ,price: '$30' },

            ],
            shirts: [
                { id: 1, name: 'Button-down',color:'blue', price: '$40' },
                { id: 2, name: 'Dress shirt',color:'black', price: '$50' },
                { id: 3, name: 'Flannel', color:'light-yellow',price: '$35' },

            ],
            jackets: [
                { id: 1, name: 'Bomber',color:'brown', price: '$80' },
                { id: 2, name: 'Denim',color:"white", price: '$60' },
                { id: 3, name: 'Leather',color:'black', price: '$100' },

            ]


        },
        women: {
             hello: [
                { id: 1, name: 'Button-down',color:'pink', price: '$40' },
                { id: 2, name: 'Dress shirt',color:'blue', price: '$50' },
                { id: 3, name: 'Flannel', price: '$35' },

            ],
            ertre: [
                {id:1, name:'Leather',price:'30'},
                {id:2, name:'Denim',price:'50'}
            ]
        }
    });
  
   
    return (
        <div  >
           <Stack direction="row" spacing={2} justifyContent='center' alignItems='center'  display='flex'>
            <Select 
            defaultValue=""
            
             value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                <MenuItem value="">addcard</MenuItem>
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
            </Select>
           
            {selectedCategory === 'men' && (
                <Select defaultValue="" value={selectedDress} onChange={(event) => setSelectedDress(event.target.value)}>
                    <MenuItem value="">Select a dress type</MenuItem>
                    <MenuItem value="tShirts">T-shirts</MenuItem>
                    <MenuItem value="shirts">Shirts</MenuItem>
                    <MenuItem value="jackets">Jackets</MenuItem>

                </Select>
               
             

            )}
             
            
            {selectedDress !== '' && (
                <Select defaultValue="" onChange={(event) =>setSelectedDress(event.target.value)}>
                    
                    {clothingData.men[selectedDress]?.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                            
                            {item.name} ({item.price}) {item.color}
                        </MenuItem>
                        
                    ))}
                    
                </Select>
                
            )}
            
            <h1>{selectedDress}</h1>
           
            {
                selectedCategory === 'women' && (
                    <Select value={womenDress} onChange={(event) =>console.log(event.target.value)}>
                        <MenuItem value="">Select WOmenen Dress</MenuItem>
                        <MenuItem value="shirts">Shirts</MenuItem>
                        <MenuItem value="jackets">Jackets</MenuItem>
                    </Select>
                )
            }
            {
                womenDress !=='' && (
                    <Select>
                    {clothingData.women[womenDress]?.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name} ({item.price})
                        </MenuItem>
                    ))};
                </Select>
                )
            }
             </Stack>
        </div>
    )
}

export default Third