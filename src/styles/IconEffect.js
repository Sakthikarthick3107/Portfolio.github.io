import { useMediaQuery } from "@mui/material";
import { makeStyles     } from "@mui/styles";


const IconEffect = makeStyles((theme) =>({
    root:{
        height:90,
        width:90,
        //maxWidth:'cover',
        //borderRadius:'20%',
        transition: 'transform ease-in-out 200ms',
        background:'transparent',
        //boxShadow:'2px 2px 5px 10px blue',
        '&:hover':{
            transform : 'scale(1.05)',

        },
        '@media (max-width: 600px)': {
            // Mobile-specific styles
            height: 70,
            width: 70,
          },
    }
}));

export default IconEffect;