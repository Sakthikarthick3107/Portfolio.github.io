import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import projects from "../images/projects.svg";
import { Element } from "react-scroll";
import ProjectData from "../api/ProjectData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Projects = () => {
  const isMobileScreen = useMediaQuery("(max-width:600px");


  return (
    <Element name="projects">
      <div> 
        <Stack
          direction="row"
          alignItems='stretch'
          justifyContent="center"
          spacing={2}
        >
          <img
            src={projects}
            alt="SkillIcon"
            style={{ height: 90, width: 100 }}
          />
          <Typography variant="h3" textAlign="center" fontFamily='Lobster'>
            My Works
          </Typography>
        </Stack>
        

        <div style={{ height: 50 }}></div>

        <Container maxWidth={isMobileScreen ? "md" : "lg"}>
          <Grid container spacing={4}>
            {ProjectData.map((values, index) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card>
                    <CardHeader
                      title={values.title}
                      subheader={values.subheader}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia component="img" image={values.image} alt="" />
                    </div>
                    <CardContent>{values.content}</CardContent>

                    <CardActions>
                      <Button
                        variant="contained"
                        component={Link}
                        href={values.code}
                        target="_blank"
                      >
                        Code
                      </Button>
                      <Button
                        variant="contained"
                        component={Link}
                        href={values.live}
                        target="_blank"
                      >
                        Live
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            ))}

            
          </Grid>
        </Container>
        <br />
      </div>
      
    </Element>
  );
};

export default Projects;
