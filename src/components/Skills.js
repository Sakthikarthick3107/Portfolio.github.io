import {  Grid, Stack, Tooltip, Typography } from '@mui/material'
import React,{useRef ,  useState , useEffect} from 'react'
import skill from '../images/skills.svg'
//import Item from '../styles/Stack'
import java from '../images/java.svg'
import csharp from '../images/csharp.svg'
import py from '../images/python.svg'
import react from '../images/react.svg'
import django from '../images/django.svg'
import mui from '../images/mui.png'
import djangorest from '../images/djangorest.png'
import codechef from '../images/codechef.jpg'
import { Element } from 'react-scroll'
import animateText from '../styles/animateText'

const Skills = () => {
    const animate = animateText()
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    let currentTarget = targetRef.current
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);
  return (
    <Element name='skills'>
        <div ref={targetRef}>
        <Stack direction='row'  alignItems='center' justifyContent='center' spacing={2}>
            <img src={skill} alt='SkillIcon' style={{height:80,width:90}}/>
            <Typography variant='h3'>Skills</Typography>
        </Stack>
        <div style={{height:50}}></div>
        <Grid container  spacing={3} justifyContent='center'  alignContent='center' >
            <Grid item lg={4} md={6} sm={6} xs={12} >
                <Stack direction='column' spacing={2} display='flex' alignItems='center' justifyContent='center'>
                    <Typography variant='h6' fontWeight='bold'>Programming</Typography><br/>
                    
                    <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
                    <Stack direction='row' spacing={2}>
                        <Tooltip title='Java' arrow>
                            <img alt='' style={{height:50,width:60}} src={java}/>
                        </Tooltip>
                        <Tooltip title='C Sharp(C#)' arrow>
                            <img alt='' style={{height:50,width:60}} src={csharp}/>
                        </Tooltip>
                        <Tooltip title='Python' arrow>
                            <img alt='' style={{height:60,width:60}} src={py}/>
                        </Tooltip>
                    </Stack>
                    </div>
                    
                </Stack>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Stack direction='column' spacing={2} display='flex' alignItems='center' justifyContent='center'>
                    <Typography variant='h6' fontWeight='bold'>Frontend Frameworks</Typography><br/>
                    
                    <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
                    <Stack direction='row' spacing={2}>
                        <Tooltip title='React Js' arrow>
                            <img alt='' style={{height:50,width:60}} src={react}/>
                        </Tooltip>
                        <Tooltip title='Material UI' arrow>
                        <img alt='' style={{height:50,width:60}} src={mui}/>
                        </Tooltip>
                        
                    </Stack>
                    </div>
                    
                </Stack>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Stack direction='column' spacing={2} display='flex' alignItems='center' justifyContent='center'>
                    <Typography variant='h6' fontWeight='bold'>Backend Frameworks</Typography><br/>
                    
                    <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
                    <Stack direction='row' spacing={2}>
                        <Tooltip title='Django' arrow>
                            <img alt='' style={{height:50,width:60}} src={django}/>
                        </Tooltip>
                        <Tooltip title='Django REST API' arrow>
                        <img alt='' style={{height:50,minWidth:60}} src={djangorest}/>
                        </Tooltip>
                        
                    </Stack>
                    </div>
                    
                </Stack>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
                <Stack direction='column' spacing={2} display='flex' alignItems='center' justifyContent='center'>
                    <Typography variant='h6' fontWeight='bold'>Problem Solving</Typography><br/>
                    
                    <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
                    <Stack direction='column' spacing={1} >
                        <Tooltip title='CodeChef' arrow>
                        <img alt='' style={{height:50,width:150}} src={codechef} href='https://www.codechef.com/users/sakthikarthi'
                                target='blank' />
                        </Tooltip>
                        
                        <Typography variant='body1'>84 problems solved</Typography>
                    </Stack>
                    </div>
                    
                </Stack>
            </Grid>
        </Grid>
        </div>
        <div style={{height:150}}></div>
    </Element>
  )
}

export default Skills
