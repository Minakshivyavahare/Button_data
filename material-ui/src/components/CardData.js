import { Box, Button, Card, CardActions, CardContent, Typography,CardMedia } from '@mui/material'
import React from 'react'


const CardData = () => {
   return <Box width='300px' display='flex' justifyContent='center' alignItems='center'>
    
      <Card>
        <CardMedia
          component='img'
          height='140'
          src="https://pyxis.nymag.com/v1/imgs/1b1/2b6/4a4c800d5af56e0cd00edc9a86e06ae345-11-puppies.rsquare.w700.jpg"
          alt='unsplash image'


        />
            
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
               React
            </Typography>
            <Typography variant='body' color='text.secondary'> 
              React is a javascript library.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Larn More</Button>
        </CardActions>
      </Card>


      
   </Box>

   
     
   
    
}

export default CardData



//card,accordion,button