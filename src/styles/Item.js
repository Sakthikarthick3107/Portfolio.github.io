//import {  Paper } from "@mui/material";
//import { styled } from '@mui/material/styles';

import { Box } from "@mui/material"

const Item = (props) =>(
  <Box sx={{
          padding:5,
          paddingLeft:8,
          
          
          }}>
    {props.children}
  </Box>
)

export default Item
