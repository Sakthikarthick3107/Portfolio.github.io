import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import myImage from '../images/mypic.png'
import Item from '../styles/Item'
import Instagram from '../images/instagram.svg'
import LinkedIn from '../images/linkedin.svg'
import Mail from '../images/mail.svg'
import animateText from '../styles/animateText';
import codechef from  '../images/codechefavatar.jpg'
import github from '../images/github.svg'


const Home = () => {
    const animate = animateText()
    const[visible , setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    },[])
    

  return (
    <div>
        <Box>
            <Grid container >
                <Grid item lg={6} md={4} sm={12} textAlign='center'>
                    <Item>
                        <div className={`${animate.leftContainer} ${visible ? animate.leftContainerVisible:''}`}>
                        <img src={myImage} alt='myImage'  width={650} height={420} />
                        </div>
                    </Item>
                </Grid>
                <Grid item lg={6} md={8} sm={12}>
                    <Item>
                    <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
                        <br/><br/>
                        <Typography variant='h4'>Hello,I am</Typography>
                        <Typography variant='h2'>Sakthikarthick N</Typography>
                        <Typography variant='h6'>
                         currently pursuing 4th year BE Computer Science Department at Panimalar 
                        Engineering College.A dedicated student willing to put knowledge into practice through projects and coordination 
                        in order to achieve objectives.
                        </Typography><br/>
                        <Stack direction='row'  spacing={0.5}>
                            <IconButton component={Link} href='https://www.instagram.com/__intelligent__psycho__/' 
                                target='blank' ><img src={Instagram} alt='Instagram' style={{height:35,width:35}} /></IconButton>
                            <IconButton  component={Link} href='https://www.linkedin.com/in/sakthikarthick-nagendran-5b5050229/' 
                                target='blank'><img src={LinkedIn} alt='LinkedIn' style={{height:40,width:40}} /></IconButton>
                            <IconButton component={Link} href='mailto:sakthikarthick3107@gmail.com' 
                                target='blank'><img src={Mail} alt='Mail' style={{height:40,width:40}} /></IconButton>
                            <IconButton component={Link} href='https://www.codechef.com/users/sakthikarthi' 
                                target='blank'><img src={codechef} alt='Codechef' style={{height:40,width:40}} /></IconButton>
                            <IconButton component={Link} href='https://github.com/Sakthikarthick3107' 
                                target='blank'><img src={github} alt='Github' style={{height:38,width:38}} /></IconButton>
                        </Stack>
                        
                    </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        <div style={{height:250}}></div>
    </div>
  )
}

export default Home
