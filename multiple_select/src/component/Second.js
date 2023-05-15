import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'

const Second = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [clothingData, setClothingData] = useState({
        men: [
            { id: 1, name: 'T-shirt', price: '200' },
            { id: 2, name: 'Jeans', price: '400' },
            { id: 3, name: 'Jacket', price: '600' },
            
        ],
        women: [
            { id: 1, name: 'Dress', price: '500' },
            { id: 2, name: 'Skirt', price: '300' },
            { id: 3, name: 'suit', price: '250' },
           
        ],
    });
    
    return (
        <div>
            <Select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                <MenuItem value="">Select a category</MenuItem>
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
            </Select>
            {
            selectedCategory !== '' && (
                <Select>
                    {clothingData[selectedCategory].map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name} ({item.price})
                        </MenuItem>
                    ))
                    }
                </Select>
            )
            }

        </div>
    )
}

export default Second