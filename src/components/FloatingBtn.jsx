import { Image } from '@mui/icons-material'
import { Fab, IconButton, Tooltip } from '@mui/material'
import React from 'react'

const FloatingBtn = ({onThemeChange , icon}) => {
  return (
    <Fab style={{position:'fixed',bottom:50,right:10}} variant="extended" color="primary">
        <Tooltip title='Shortcut : Shift + T'>
         <IconButton style={{padding:0}} onClick={onThemeChange}>
            <img src={icon} alt='theme' style={{height:60 , width:60 , padding:0}} />
            
        </IconButton>
        </Tooltip>
    </Fab>
  )
}

export default FloatingBtn