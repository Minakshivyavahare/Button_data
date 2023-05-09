import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Delete} from '@mui/icons-material'

const ButtonData = () => {
    const[color,setColor]=useState("primary")
    const[disableBtn,setDisableBtn] = useState(false)
    function customMe()
    {
        
    setColor("secondary")
      //setDisableBtn(true)
    }
  return (
    <Grid container lg={12} justifyContent='center' alignItems='center'>
        <Grid item m={30}>
        
        <Button
       
        color={color}
        variant='outlined'
        size='large'
      disabled={disableBtn}
        onClick={()=>{customMe()}}
        //startIcon={<Delete></Delete>}
        endIcon={<Delete></Delete>}
        >Click Me</Button>
        </Grid>
       
   </Grid>
  )
}

export default ButtonData


// three types of variant : contained,text,outlined,string
//color : primary,secondary
//dynamic:
//size: small,medium,large by default medium