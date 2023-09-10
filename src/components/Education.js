import { Avatar, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Timeline, TimelineItem ,TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator ,TimelineOppositeContent} from '@mui/lab';

import EducationIcon from '../images/education.svg'
import { Element } from 'react-scroll';
import {useMediaQuery} from '@mui/material'

const Education = () => {
 
  const isMobileScreen = useMediaQuery('(max-width:600px')

 


  return (
    <Element name='education' >
      <div>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
      <Avatar src={EducationIcon} alt='EducationAvatar' sx={{height:100,width:100}} />
     
      <Typography variant='h3'>Education</Typography><br/>
      </Stack>
      <Container maxWidth={isMobileScreen ? 'sm' :  'md'} >
      <Timeline>

        <TimelineItem>
          <Grid container>
            <Grid item xs={3} sm={4} md={5}>
              <TimelineOppositeContent>
                <div >
                  <Typography variant='h6' fontWeight='bold'>SSLC</Typography>
                  <Typography variant='body2' >(2017 - 2018)</Typography>
                </div>
              </TimelineOppositeContent>
            </Grid>

          <Grid item xs={1} sm={1} md={2} display='flex' justifyContent='center'>
          <TimelineSeparator>
            <TimelineDot color='success'/>
            <TimelineConnector/>
          </TimelineSeparator>
          </Grid>

          <Grid item xs={6} sm={6} md={5}>
          <TimelineContent>
            <div>
              <Typography variant='h6'>S.B.K.K.S.S.Thiyagarajan Memorial Matriculation School,Aruppukottai</Typography>
              <Typography variant='body1'>Scored 95.2%</Typography>
            </div>

          </TimelineContent>
          </Grid>
          </Grid>
        </TimelineItem>

        

        <TimelineItem>
        <Grid container>
            <Grid item xs={3} sm={4} md={5}>
          <TimelineOppositeContent>
          <div>
            <Typography variant='h6' fontWeight='bold'>HSC &nbsp;</Typography>
            <Typography variant='body2' >(2019 - 2020)&nbsp;</Typography>
          </div>
          </TimelineOppositeContent>
          </Grid>

          <Grid item xs={1} sm={1} md={2} display='flex' justifyContent='center'>
          <TimelineSeparator>
            <TimelineDot color='success'/>
            <TimelineConnector/>
          </TimelineSeparator>
          </Grid>

          
            <Grid item xs={6} sm={6} md={5}>
          <TimelineContent>

          <div>
            <Typography variant='h6'>S.B.K.Higher Secondary School,Aruppukottai</Typography>
            <Typography variant='body1'>Scored 87.17%</Typography>
          </div>
          </TimelineContent>
          </Grid>
          </Grid>
        </TimelineItem>

        <TimelineItem>
        <Grid container>
            <Grid item xs={3} sm={4} md={5}>
          <TimelineOppositeContent>
          <div>
            <Typography variant='h6' fontWeight='bold'>B.E&nbsp;</Typography>
            <Typography variant='body1'>Computer Science Engineering&nbsp;</Typography>
            <Typography variant='body2' >(2020 - 2024)now in the final year&nbsp;</Typography>
          </div>
          </TimelineOppositeContent>
          </Grid>

          <Grid item xs={1} sm={1} md={2} display='flex' justifyContent='center'>
          <TimelineSeparator>
            <TimelineDot color='info'  />
          </TimelineSeparator>
          </Grid>

          <Grid item xs={6} sm={6} md={5}>
          <TimelineContent>

          <div>
            <Typography variant='h6'>Panimalar Engineering College</Typography>
            <Typography variant='body1'>Scored 8.81cgpa from past 6 semesters</Typography>
          </div>

          </TimelineContent>
          </Grid>
          </Grid>
        </TimelineItem>

      </Timeline>
      </Container>
      <div style={{height:150}}></div>
      </div>
    </Element>
  )
}

export default Education
