import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'

const InputData = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2} >
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
          <TextField label='small secondary' size='small' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
          <TextField label='Form Input' required error/>
          <TextField label='Password' type='password'  disabled helperText="DO not share your password"/>
          <TextField label='Read Only' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='weight'
            InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }}
            />
        </Stack>
    </Stack>
  )
}

export default InputData



//variant: outlined(default), filled,standard
//label : for heading
//size
//color
//required *
//helptext
//type
//Read Only
//Adonment