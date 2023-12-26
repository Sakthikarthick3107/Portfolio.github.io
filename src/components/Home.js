import { Box, Grid, IconButton, Link, Stack, Typography ,useMediaQuery} from '@mui/material'
import React, { useState ,useEffect} from 'react'
import myImage from '../images/mypic.png'
import Item from '../styles/Item'
import Instagram from '../images/instagram.png'
import LinkedIn from '../images/linkedin.png'
import Mail from '../images/mail.png'
import codechef from  '../images/codechefavatar.jpg'
import github from '../images/github.png'
import IconEffect from '../styles/IconEffect'


const Home = ({theme}) => {
    const domains = ['Frontend Developer' , 'Backend Developer' , 'Native App Developer' , 'Web Designer' , ''];
    const [domainIndex , setDomainIndex] = useState(0);
    const [currentWord , setCurrentWord] = useState(domains[domainIndex]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState('');
    const [isTyping , setIsTyping] = useState(true);
    const[showCursor , setShowCursor] = useState(false);
    const sentence = "excelling in web development, mobile app development, and creative problem-solving, with a commitment to applying theoretical knowledge in practical projects and contributing to their success through effective execution and coordination.";
    const isMobileScreen = useMediaQuery('(max-width:500px)')
    useEffect(() =>{
        if(isTyping){
            const typing = setInterval(() =>{
                if(currentWord !== displayWord ){
                    setDisplayWord(prev => prev + currentWord[currentWordIndex]);
                    setCurrentWordIndex(prev => prev + 1);
                }
                else{
                    clearInterval(typing);
                    setTimeout(() => {
                        setIsTyping(false);
                    },1000)
                    
                }
            },35);
            return () => clearInterval(typing)
        }
        else{
            const erasing = setInterval(() =>{
                if(currentWordIndex >= 0){
                    setDisplayWord(prev => currentWord.slice(0 , currentWordIndex));
                    setCurrentWordIndex(prev => prev - 1);
                }
                else{
                    clearInterval(erasing);
                    setIsTyping(true);
                    setCurrentWordIndex(prev => 0);
                    if(domainIndex === domains.length - 1){
                        setDomainIndex(0);
                        setCurrentWord(domains[0]);
                    }
                    else{
                        setDomainIndex(prev => prev + 1);
                        setCurrentWord(domains[domainIndex]);
                    }
                    
                }
            },35);
            return () => clearInterval(erasing);
        }        
    })
    useEffect(() => {
        setTimeout(() =>{
            setShowCursor(!showCursor);
        },300);
    })

    const effect = IconEffect();

  return (
    <div>
        <Box>
            <Grid container display='flex' justifyContent='center'  alignItems='center'>
                <Grid item lg={5} md={5} sm={12} xs={9} textAlign='center'>
                    
                    <div
                       style={{display:'flex',justifyContent:'center' , alignItems:'left'}} >
                    <img  src={myImage} alt='myImage'  width={300} height={350} />
                    </div>
                    
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    
                        <Stack direction='column' display='flex' justifyContent='center' m={5}>
                        <Typography variant='h5'>Hello,I am</Typography>
                        <Typography variant={isMobileScreen? 'h2' : 'h1'}  sx={{ fontFamily: 'Carattere' , display:'flex' , flexWrap :'wrap'}} color={theme && 'purple'} >Sakthikarthick N</Typography>
                        <Box sx={{marginBottom:4, height : 50 , width:'100%',display:'flex' , flexDirection:'row',alignItems:'flex-end'}}>
                            <Typography variant={isMobileScreen?'h5':'h3'} sx={{fontFamily:'monospace', display:'flex',flexDirection:'row' , alignItems:'flex-end' , flexWrap :'wrap'}}>{displayWord}
                            
                            </Typography>
                            <Typography variant={isMobileScreen?'h5':'h3'} sx={{fontFamily:'monospace' , fontWeight:800,fontSize:30}} color={theme ? '#a33bdf':'#075cb7'} >{showCursor && '_' }
                            </Typography>
                        </Box>
                        
                        <Typography variant='h5' >
                        {sentence}
                        </Typography>
                        
                        <br/>
                        
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
                         
                        </Stack>
                    
                </Grid>
            </Grid>
        </Box>
        <div style={{height:120}}></div>
    </div>
  )
}

export default Home
