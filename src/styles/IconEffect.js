import { makeStyles } from "@mui/styles";



const IconEffect = makeStyles((theme) =>({
    root:{
        height:70,
        //maxWidth:'cover',
        //borderRadius:'20%',
        transition: 'transform ease-in-out 200ms',
        background:'transparent',
        '&:hover':{
            transform : 'scale(1.05)',
        }
    }
}));

export default IconEffect;