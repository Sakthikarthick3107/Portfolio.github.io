import { makeStyles } from "@mui/styles"



const animateText = makeStyles((theme)=>({
    rightContainer:{
        transform:'translateY(100%)',
        opacity:0,
        transition:'transform 1s ease-out,opacity 5s ease-out'
    },
    rightContainerVisible:{
        transform:'translateY(0)',
        opacity:1,
    },
    leftContainer:{
        
        opacity:0,
        transition:'opacity 5s ease'
    },
    leftContainerVisible:{
        opacity:1,
        transition:'opacity 5s ease'
    },
    
    
}))

export default animateText