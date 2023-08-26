import {  Button, Card,  CardActions, CardContent, CardHeader, CardMedia, Container,  Grid, Link,  Stack, Typography, useMediaQuery } from '@mui/material'
import React,{useRef , useState , useEffect} from 'react'
import projects from '../images/projects.svg'
import hen from '../images/blogo.png'
import resume from '../images/resume.svg'
import { Element } from 'react-scroll'
import animateText from '../styles/animateText'
import authenticate from '../images/laptop-security.svg'
import notes from '../images/notes.svg'

const Projects = () => {
  const animate = animateText()
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width:600px')
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
        <Container maxWidth={isMobileScreen?'md' : 'lg'}>

        <Grid container spacing={4}>

        
          <Grid item lg={4} md={6} sm={6} xs={12}>
          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Card>
              <CardHeader  title='Chicken Shop' subheader='For advertising about our business through the Internet '/>
              <CardMedia component='img' image={hen} alt=''/>
              <CardContent>
                
                    Website for my fathers chicken shop using html,css,js,php.
                
              </CardContent>
              
              <CardActions>
                <Button variant='contained' component={Link} href='https://github.com/Sakthikarthick3107/sakthibroilers.github.io' target='_blank'>Code</Button>
                <Button  variant='contained' component={Link} href='https://sakthibroilers.netlify.app'>Live</Button>
              </CardActions>
            </Card>
            </div>
          </Grid>
        

        
          <Grid item lg={4} md={6} sm={6} xs={12}>
          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Card>
              <CardHeader  title='Portfolio' subheader='For showcasing my skillsets and experiences in academics'/>
              <CardMedia component='img' image={resume} alt=''/>
              <CardContent>
                
                  My Portfolio Website using ReactJs and MaterialUI
                
              </CardContent>
              
              <CardActions>
                <Button variant='contained' component={Link} href='https://github.com/Sakthikarthick3107/Portfolio.github.io' target='_blank'>Code</Button>
                <Button variant='contained' component={Link} href='https://sakthikarthick3107.netlify.app/' target='_blank'>Live</Button>
              </CardActions>
            </Card>
            </div>
          </Grid>

        
          <Grid item lg={4} md={6} sm={6} xs={12}>
          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
          <Card>
              <CardHeader  title='Authentication' subheader='Enhances security by authenticate every users with their user credentials'/>
              <CardMedia component='img' image={authenticate} alt=''/>
              <CardContent>
              Designed and developed a dynamic full-stack authentication page
that combines security with creative designs and themes. 
                
              </CardContent>
              <CardActions>
                <Button variant='contained' >Code</Button>
                <Button  variant='contained'>Live</Button>
              </CardActions>
            </Card>
            </div>
          </Grid>
        

        
          
          <Grid item lg={4} md={6} sm={6} xs={12}>
          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
          <Card>
              <CardHeader  title='To-do-list' subheader='Simple tool for note down our daily tasks and summarize'/>
              <CardMedia component='img' image={notes} alt=''/>
              <CardContent>
                
                  A simple to-do-list with neat user interfaces and features
                
              </CardContent>
              
              <CardActions>
                <Button variant='contained' component={Link} href='https://github.com/Sakthikarthick3107/LGMVIP-Web-1-to-do-list' target='_blank' >Code</Button>
                <Button variant='contained' component={Link} href='https://sakthikarthicks-to-do-list.netlify.app/' target='_blank' >Live</Button>
              </CardActions>
            </Card>
            </div>
          </Grid>
        
          </Grid>
        </Container>
        </div>
        <div style={{height:50}}></div>
    </Element>
  )
}

export default Projects
