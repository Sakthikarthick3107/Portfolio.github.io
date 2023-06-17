import { Avatar, Container, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React,{useRef , useState , useEffect} from 'react'
import projects from '../images/projects.svg'
import hen from '../images/blogo.png'
import resume from '../images/resume.svg'
import { Element } from 'react-scroll'
import animateText from '../styles/animateText'


const Projects = () => {
  const animate = animateText()
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    let currentTarget = targetRef.current
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);
  
  return (
    <Element name='projects'>
      <div ref={targetRef}>
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
            <img src={projects} alt='SkillIcon' style={{height:90,width:100}}/>
            <Typography variant='h3' textAlign='center'>Projects</Typography>
        </Stack>
        <div style={{height:50}}></div>
        <Container maxWidth='md'>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

        <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
          <ListItem  >
            <ListItemAvatar>
              <Avatar src={hen} alt='' sx={{height:120,width:120}} />
            </ListItemAvatar>
            <ListItemText primary='Website for my fathers chicken shop'
            secondary='Using html,css,js,php.'/><br/>
            <Link href='https://github.com/Sakthikarthick3107/sakthibroilers.github.io' target='blank'>
            View Code
            </Link>
          </ListItem>
          </div>
          

          <Divider variant='inset' component='li'/>

          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
          <ListItem  >
            <ListItemAvatar>
              <Avatar src={resume} alt='' sx={{height:120,width:120}} />
            </ListItemAvatar>
            <ListItemText primary='My Portfolio Website'
            secondary='Using ReactJs and MaterialUI'/>
            <Stack direction='column' spacing={2}>
              <Link href='https://github.com/Sakthikarthick3107/Portfolio.github.io ' target='blank'>
                  View Code
              </Link>
              <Link href='https://sakthikarthick3107.netlify.app/' target='blank'>
                  Visit Site
              </Link>
            </Stack>
            
          </ListItem>
          </div>
          
        </List>
        </Container>
        </div>
        <div style={{height:50}}></div>
    </Element>
  )
}

export default Projects
