import { Avatar, Container, Stack, Typography } from '@mui/material'
import React, {useState ,  useEffect , useRef} from 'react'
import { Timeline, TimelineItem ,TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator ,TimelineOppositeContent} from '@mui/lab';
import animateText from '../styles/animateText';
import EducationIcon from '../images/education.svg'
import { Element } from 'react-scroll';
import {useMediaQuery} from '@mui/material'

const Education = () => {
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
    <Element name='education' >
      <div ref={targetRef}>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
      <Avatar src={EducationIcon} alt='EducationAvatar' sx={{height:100,width:100}} />
      <Typography variant='h3'>Education</Typography><br/>
      </Stack>
      <Container maxWidth={isMobileScreen? 'xs' :'md'} >
      <Timeline>

        <TimelineItem>
          <TimelineOppositeContent>
          <div className={`${animate.leftContainer} ${visible ? animate.leftContainerVisible:''}`}>
            <Typography variant='h6' fontWeight='bold'>SSLC&nbsp;</Typography>
            <Typography variant='body2' >(2017 - 2018)&nbsp;</Typography>
          </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='success'/>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>

          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Typography variant='h6'>S.B.K.K.S.S.Thiyagarajan Memorial Matriculation School,Aruppukottai</Typography>
            <Typography variant='body1'>Scored 95.2%</Typography>
          </div>

          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          <div className={`${animate.leftContainer} ${visible ? animate.leftContainerVisible:''}`}>
            <Typography variant='h6' fontWeight='bold'>HSC 1st&nbsp;</Typography>
            <Typography variant='body2' >(2018 - 2019)&nbsp;</Typography>
          </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>

          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Typography variant='h6'>S.B.K.Higher Secondary School,Aruppukottai</Typography>
            <Typography variant='body1'>Scored 76.3%</Typography>
          </div>

          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          <div className={`${animate.leftContainer} ${visible ? animate.leftContainerVisible:''}`}>
            <Typography variant='h6' fontWeight='bold'>HSC 2nd&nbsp;</Typography>
            <Typography variant='body2' >(2019 - 2020)&nbsp;</Typography>
          </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='success'/>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>

          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Typography variant='h6'>S.B.K.Higher Secondary School,Aruppukottai</Typography>
            <Typography variant='body1'>Scored 87.17%</Typography>
          </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          <div className={`${animate.leftContainer} ${visible ? animate.leftContainerVisible:''}`}>
            <Typography variant='h6' fontWeight='bold'>B.E&nbsp;</Typography>
            <Typography variant='body1'>Computer Science Engineering&nbsp;</Typography>
            <Typography variant='body2' >(2020 - 2024)now in the final year&nbsp;</Typography>
          </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='info' />
          </TimelineSeparator>
          <TimelineContent>

          <div className={`${animate.rightContainer} ${visible ? animate.rightContainerVisible:''}`}>
            <Typography variant='h6'>Panimalar Engineering College</Typography>
            <Typography variant='body1'>Scored 8.81cgpa from past 6 semesters</Typography>
          </div>

          </TimelineContent>
        </TimelineItem>

      </Timeline>
      </Container>
      <div style={{height:150}}></div>
      </div>
    </Element>
  )
}

export default Education
