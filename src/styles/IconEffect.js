import { makeStyles } from "@mui/styles";


const IconEffect = makeStyles((theme) =>({
    root:{
        height:70,
        maxWidth:80,
        transition: 'transform ease-in-out 200ms',
        '&:hover':{
            transform : 'scale(1.15)',
            
        }
    }
}));

export default IconEffect;