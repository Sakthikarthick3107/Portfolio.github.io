import { AppBar, Avatar, Box, IconButton,   Stack,   Tab, Tabs, Toolbar, Typography , useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import myImage from '../images/avatar2.jpg'




const NavBar = ({onThemeChange , icon, scrolltoSection}) => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
    setValue(newValue);
     };
     const isMobileScreen = useMediaQuery('(max-width:500px)')

    

  return (
    <>
        <Box sx={{flexGrow:1}}  id="home" >
            
            <AppBar >
                <Toolbar>
                    <Box >
                        <Avatar src={myImage} alt='MyAvatar'/>
                    </Box>&nbsp;&nbsp;
                    <Box sx={{flexGrow:1}}>
                        <Typography variant='h4' fontFamily='Lobster' >Portfolio</Typography>
                    </Box>
                    {isMobileScreen ?  <IconButton onClick={onThemeChange}>{icon}</IconButton> : (
                        <Box>
                        <Stack direction='row'>
                        <Tabs value={value} onChange={handleChange}>
                            
                            <Tab onClick={() => scrolltoSection('home')}    label="home" /> 
                            <Tab onClick={() => scrolltoSection('experience')}   label="experience" />
                            <Tab  onClick={() => scrolltoSection('skills')}  label="skills"/>
                            <Tab  onClick={() => scrolltoSection('projects')}  label='works'/>
                            
                        </Tabs>
                       
                        </Stack>
                        
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
        {/* <div style={{height:120}}></div> */}
    </>
  )
}

export default NavBar
