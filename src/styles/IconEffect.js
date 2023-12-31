import { useMediaQuery } from "@mui/material";
import { makeStyles     } from "@mui/styles";


const IconEffect = makeStyles((theme) =>({
    root:{
        height:90,
        width:90,
        padding:0,
        transition: 'transform ease-in-out 200ms',
        background:'transparent',
        '&:hover':{
            transform : 'scale(1.05)',

        },
        '@media (max-width: 600px)': {
            height: 70,
            width: 70,
          },
    }
}));

export default IconEffect;