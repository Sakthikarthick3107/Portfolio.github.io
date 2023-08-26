//import {  Paper } from "@mui/material";
//import { styled } from '@mui/material/styles';

import { Box } from "@mui/material"

const Item = (props) =>(
  <Box sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          padding:2
          }}>
    {props.children}
  </Box>
)

export default Item
