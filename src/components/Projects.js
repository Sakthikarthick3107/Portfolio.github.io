import {  Button, Card,  CardActions, CardContent, CardHeader, CardMedia, Container,  Grid, Link,  Stack, Typography, useMediaQuery } from '@mui/material'
import React,{useRef , useState , useEffect} from 'react'
import projects from '../images/projects.svg'
import animateText from '../styles/animateText'
import { Element } from 'react-scroll'
import ProjectData from './ProjectData'
import DraftData from './DraftData'

const Projects = () => {
  const animate = animateText()
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width:600px')
  const [drafts , showDrafts] = useState(false)


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
            <Typography variant='h3' textAlign='center'>My Works</Typography>
        </Stack>

        <div style={{height:50}}></div>

        <Container maxWidth={isMobileScreen?'md' : 'lg'}>

        <Grid container spacing={4}>

        {ProjectData.map((values,index) =>(
            <Grid item lg={4} md={6} sm={6} xs={12} key={index} >
            <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Card>
              <CardHeader  title={values.title} subheader={values.subheader}/>
              <CardMedia component='img' image={values.image} alt=''/>
              <CardContent>
                
                    {values.content}
                
              </CardContent>
              
              <CardActions>
                <Button variant='contained' component={Link} href={values.code} target='_blank'>Code</Button>
                <Button  variant='contained' component={Link} href={values.live} target='_blank'>Live</Button>
              </CardActions>
            </Card>
            </div>
          </Grid>
        ))
          
          }

          {drafts&&<>
          {DraftData.map((values , index)=>(
            <Grid item lg={4} md={6} sm={6} xs={12} key={index} >
            <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Card>
                <CardHeader  title={values.title} subheader={values.subheader}/>
                <CardMedia component='img' image={values.image} alt=''/>
                <CardContent>
                  
                    {values.content}
                  
                </CardContent>
                
                <CardActions>
                  <Button variant='contained' component={Link} href={values.code} target='_blank' >Code</Button>
                  <Button variant='contained' component={Link} href={values.live} target='_blank' >Live</Button>
                </CardActions>
              </Card>
              </div>
            </Grid>

          ))}
             </> }
          
          
          </Grid>
        </Container>
        <br/>

        <Stack direction='row' display='flex' justifyContent='center'>
            <Button variant='contained' onClick={()=>showDrafts(!drafts)}>Show Drafts</Button>
        </Stack>

        </div>
        <div style={{height:50}}></div>
    </Element>
  )
}

export default Projects
