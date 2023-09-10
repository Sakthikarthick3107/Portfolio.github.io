import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import myImage from '../images/mypic.png'
import Item from '../styles/Item'
import Instagram from '../images/instagram.png'
import LinkedIn from '../images/linkedin.png'
import Mail from '../images/mail.png'
import codechef from  '../images/codechefavatar.jpg'
import github from '../images/github.png'
import IconEffect from '../styles/IconEffect'


const Home = () => {

    
    const[objective , setObjective] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const[showCursor,setShowCursor] = useState(true)
    const blinkCursor = '|'
    

    const sentence = "I am a fourth-year student majoring in Computer Science at Panimalar Engineering College. My commitment to learning is reflected in my dedication to applying theoretical knowledge to real-world projects. I am driven to achieve objectives through effective project execution and coordination. My academic journey has equipped me with a strong foundation, and I am eager to contribute my skills and expertise to practical applications.";
    useEffect(() =>{
        if(currentIndex < sentence.length){
            const timeout = setTimeout(() =>{
                setObjective((prev) => prev + sentence[currentIndex]);
                setCurrentIndex(e  => e+1);

            },10);
            return () => clearTimeout(timeout)
        }
    },[currentIndex , sentence])

    useEffect(()=>{
        const blinking = setInterval(() =>{
            setShowCursor(!showCursor)
        },300);
        return ()=> clearInterval(blinking)
    },[showCursor])
    
    const effect = IconEffect();

  return (
    <div>
        <Box>
            <Grid container display='flex' justifyContent='center'  alignItems='center'>
                <Grid item lg={5} md={5} sm={12} xs={9} textAlign='center'>
                    
                    <div
                       style={{display:'flex',justifyContent:'center' , alignItems:'center'}} >
                    <img  src={myImage} alt='myImage'  width={300} height={350} />
                    </div>
                    
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    
                    
                        <br/><br/>
                        <Stack direction='column' display='flex' justifyContent='flex-start' m={5}>
                        <Typography variant='h4'>Hello,I am</Typography>
                        <Typography variant='h2'>Sakthikarthick N</Typography>
                        <Typography variant='h6' >
                        {objective}&nbsp;{showCursor && blinkCursor}
                        </Typography>
                        
                        <br/>
                        {sentence === objective &&
                        <Stack direction='row' spacing={1}>
                            <IconButton component={Link} href='https://www.instagram.com/__intelligent__psycho__/' 
                                target='blank'  ><img className={effect.root} src={Instagram} alt='Instagram'  /></IconButton>
                            <IconButton  component={Link} href='https://www.linkedin.com/in/sakthikarthick-nagendran-5b5050229/' 
                                target='blank' ><img className={effect.root} src={LinkedIn} alt='LinkedIn'  /></IconButton>
                            <IconButton component={Link} href='mailto:sakthikarthick3107@gmail.com' 
                                target='blank' ><img className={effect.root} src={Mail} alt='Mail'  /></IconButton>
                            <IconButton component={Link} href='https://github.com/Sakthikarthick3107' 
                                target='blank' ><img className={effect.root} src={github} alt='Github'  /></IconButton>
                        </Stack>
                            }
                        </Stack>
                    
                </Grid>
            </Grid>
        </Box>
        <div style={{height:250}}></div>
    </div>
  )
}

export default Home
