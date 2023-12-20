import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineOppositeContent,
} from "@mui/lab";

import EducationIcon from "../images/education.svg";
import { Element } from "react-scroll";
import { useMediaQuery } from "@mui/material";

const Education = () => {
  const isMobileScreen = useMediaQuery("(max-width:600px");

  return (
    <Element name="experience">
      <div>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Avatar
            src={EducationIcon}
            alt="EducationAvatar"
            sx={{ height: 100, width: 100 }}
          />

          <Typography variant="h3">Experience</Typography>
          <br />
        </Stack>
        <Container maxWidth={isMobileScreen ? "sm" : "md"}>
          <Timeline>

          <TimelineItem>
              <Grid container>
                <Grid item xs={3} sm={4} md={5}>
                  <TimelineOppositeContent>
                    <div>
                      <Typography variant="h6">
                        Current position
                      </Typography>
                      <Typography variant="body2">
                        {/* (2020 - 2024)&nbsp; */}
                      </Typography>
                    </div>
                  </TimelineOppositeContent>
                </Grid>

                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={2}
                  display="flex"
                  justifyContent="center"
                >
                  <TimelineSeparator>
                    <TimelineDot color="info" />
                    <TimelineConnector />
                  </TimelineSeparator>
                </Grid>

                <Grid item xs={6} sm={6} md={5}>
                  <TimelineContent>
                    <div>
                      <Typography variant="h6">
                        Will update soon
                      </Typography>
                      <Typography variant="body1"></Typography>
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
                      <Typography variant="h6" fontWeight="bold">
                        Web and Mobile Developer Intern
                      </Typography>
                      <Typography variant="body2">
                        October 2023 - November 2023
                      </Typography>
                    </div>
                  </TimelineOppositeContent>
                </Grid>

                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={2}
                  display="flex"
                  justifyContent="center"
                >
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                    <TimelineConnector />
                  </TimelineSeparator>
                </Grid>

                <Grid item xs={6} sm={6} md={5}>
                  <TimelineContent>
                    <div>
                      <Typography variant="h6">
                        Dipeat Foods Private Limited
                      </Typography>
                      <Typography variant="body1">
                        <ul type="disc">
                          <li>
                            Design and manage the company website's UI with
                            Vue.js for an intuitive, visually appealing, and
                            creative user experience across all devices.
                          </li>
                          <li>
                            Develop a React Native app for the company, enhancing
                            its portfolio and gaining valuable experience
                            in mobile app development.
                          </li>
                        </ul>
                      </Typography>
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
                      <Typography variant="h6" fontWeight="bold">
                        Web Developer Intern
                      </Typography>
                      <Typography variant="body2">August 2023</Typography>
                    </div>
                  </TimelineOppositeContent>
                </Grid>

                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={2}
                  display="flex"
                  justifyContent="center"
                >
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                    
                  </TimelineSeparator>
                </Grid>

                <Grid item xs={6} sm={6} md={5}>
                  <TimelineContent>
                    <div>
                      <Typography variant="h6">Let's Grow More</Typography>
                      <Typography variant="body1">
                        Successfully tackled the tasks , optimizing website
                        performance and honing my skills in web development
                        using React Js .
                      </Typography>
                    </div>
                  </TimelineContent>
                </Grid>
              </Grid>
            </TimelineItem>

          </Timeline>
        </Container>
        <div style={{ height: 150 }}></div>
      </div>
    </Element>
  );
};

export default Education;
