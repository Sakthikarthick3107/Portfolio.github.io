import {  Grid, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import skill from '../images/skills.svg'
import { Element } from 'react-scroll'

import SkillData from './SkillData'

const Skills = () => {
  

 
  return (
    <Element name='skills'>
        <div >
        <Stack direction='row'  alignItems='center' justifyContent='center' spacing={2}>
            <img src={skill} alt='SkillIcon' style={{height:80,width:90}}/>
            <Typography variant='h3'>Skills</Typography>
        </Stack>
        <div style={{height:50}}></div>

        <Grid container  spacing={3} justifyContent='center'  alignContent='center' >
        
        {Object.keys(SkillData).map(category =>(
        <Grid item lg={4} md={6} sm={6} xs={12} key = {category} >
                <Stack direction='column' display='flex' alignItems='center' justifyContent='center'>
                    <Typography variant='h6' fontWeight='bold'>{category}</Typography><br/>
                    
                    <div>
                    
                        <Grid container spacing={2} display='flex' justifyContent='space-around'>
                        {SkillData[category].map((item , index )=>(
                            <Grid item lg={3} md={4} sm={6} display='flex' justifyContent='center'>
                                <Tooltip title={item.name} arrow key={index}> 
                                <img alt='' style={{height:80,maxWidth:100}} src={item.image}/>
                                </Tooltip>
                            </Grid>
                            ))}
                        </Grid>
                    </div>
                </Stack>
            </Grid>))}
        </Grid>
        </div>
        <div style={{height:150}}></div>
    </Element>
  )
}

export default Skills
