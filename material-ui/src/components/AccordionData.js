import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionData = () => {
    

    // const handleChange = (isExpanded:Boolean) => {
    //     setExpanded(isExpanded ? panel : false)
    //   }
  return (
   <Grid container justifyContent='center' alignItems='center'>
      <Grid item m={20}>
         <Accordion  
         
         >
            <AccordionSummary
            style={{color:'red'}}
             id='panel1-header' 
              aria-controls="panel1-content"
               expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
               >
            <Typography>Accordian1</Typography>
            </AccordionSummary>
            <AccordionDetails style={{color:'blue',border:'2px solid black'}}>
                lorem iIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is availa
            </AccordionDetails>
         </Accordion>
         {/* -------------------------------------------------------- */}
      
     
      <Accordion >
            <AccordionSummary
            style={{color:'blueviolet'}}
             id='panel2-header' 
              aria-controls="panel2-content"
               expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
               >
            <Typography>Accordian2</Typography>
            </AccordionSummary>
            <AccordionDetails  style={{color:'green',border:'2px solid black'}}>
                lorem iIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is availa
            </AccordionDetails>
         </Accordion>
         {/* ---------------------------------------------------- */}
         <Accordion 
        
        >
            <AccordionSummary
            style={{color:'brown'}}
             id='panel3-header' 
              aria-controls="panel3-content"
               expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
               >
            <Typography>Accordian3</Typography>
            </AccordionSummary>
            <AccordionDetails  style={{color:'orange',border:'2px solid black'}}>
                lorem iIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is availa
            </AccordionDetails>
         </Accordion>

      </Grid>
   </Grid>
  )
}

export default AccordionData