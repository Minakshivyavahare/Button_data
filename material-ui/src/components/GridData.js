import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const GridData = () => {
  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item lg={3} sm={6} xs={12}  style={{backgroundColor:'orangered'}}>
        <Card style={{backgroundColor:'green'}}>
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
               React
            </Typography>
            <Typography>
            React is a javascript library.
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{color:'white'}} size='small'>Share</Button>
            <Button style={{color:'white'}} size='small'>Larn More</Button>
        </CardActions>
        </Card>
      </Grid>


      <Grid item lg={3} sm={6} xs={12} spacing={1} style={{backgroundColor:'orangered'}}>
      <Card style={{backgroundColor:'green'}}>
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
               React
            </Typography>
            <Typography>
            React is a javascript library.
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{color:'white'}} size='small'>Share</Button>
            <Button style={{color:'white'}} size='small'>Larn More</Button>
        </CardActions>
        </Card>
      </Grid>


      <Grid item lg={3} sm={6} xs={12} style={{backgroundColor:'orangered'}}>
      <Card style={{backgroundColor:'green'}}>
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
               React
            </Typography>
            <Typography>
            React is a javascript library.
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{color:'white'}} size='small'>Share</Button>
            <Button style={{color:'white'}} size='small'>Larn More</Button>
        </CardActions>
        </Card>
      </Grid>

      
      <Grid item lg={3} sm={6} xs={12} style={{backgroundColor:'orangered'}}>
      <Card style={{backgroundColor:'green'}}>
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
               React
            </Typography>
            <Typography>
            React is a javascript library.
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{color:'white'}} size='small'>Share</Button>
            <Button style={{color:'white'}} size='small'>Larn More</Button>
        </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default GridData