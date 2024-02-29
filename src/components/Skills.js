import {  Grid, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import skill from '../images/skills.svg'
import { Element } from 'react-scroll'

import SkillData from '../api/SkillData'
import IconEffect from '../styles/IconEffect'


const Skills = () => {
  const effect = IconEffect();
  const isMobileScreen = useMediaQuery('(max-width:600px)');
  const js = [];

  
    for (const category in SkillData) {
    SkillData[category].forEach(skill => {
      js.push({
        
          name: skill.name,
          image: skill.image
        
      });
    });
  }
  console.log(js)

  
 
  return (
    <Element name='skills'>
        <div style={{minHeight:'100vh'}}>
        <Stack direction='row'   alignItems='flex-end' justifyContent='center' spacing={2}>
            <img src={skill} alt='SkillIcon' style={{height:80,width:90}}/>
            <Typography variant='h3' fontFamily='Lobster'>Skills</Typography>
        </Stack>
        <div style={{height:50}}></div>

        <Grid container  spacing={3} justifyContent='center'  alignContent='center' >
        
        {isMobileScreen?
        <>
        {js.map((item,index)=>(
            <Grid item sm={4} display='flex' justifyContent='center' key={index}>
                <Tooltip title={item.name} arrow key={index}> 
                <img src={item.image} alt='' className={effect.root}/>
                </Tooltip>
            </Grid>
        ))}
        </>
        :
        <>
        {Object.keys(SkillData).map(category =>(
        <Grid item lg={4} md={6} sm={6} xs={12} key = {category} >
                <Stack direction='column' display='flex' alignItems='center' justifyContent='center'>
                    <Typography variant='h5' fontWeight='bold'>{category}</Typography><br/>
                    
                    <div>
                    
                        <Grid container spacing={2} display='flex' justifyContent='space-around'>
                        {SkillData[category].map((item , index )=>(
                            <Grid item lg={3} md={4} sm={6} display='flex' justifyContent='center'>
                                <Tooltip title={item.name} arrow key={index}> 
                                <img src={item.image} alt='' className={effect.root}/>
                                </Tooltip>
                            </Grid>
                            ))}
                        </Grid>
                    </div>
                </Stack>
            </Grid>))}
            </>}
        </Grid>
        </div>
    </Element>
  )
}

export default Skills
