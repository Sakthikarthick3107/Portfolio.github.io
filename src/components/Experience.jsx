import {
  Avatar,
  // Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  // TimelineOppositeContent,
} from "@mui/lab";
import ExperienceData from "../api/ExperienceData";
import EducationIcon from "../images/education.svg";
import { Element } from "react-scroll";
import { useMediaQuery } from "@mui/material";
import activeDiv from "../styles/activeDiv";

const Education = ({ theme }) => {
  const isMobileScreen = useMediaQuery("(max-width:600px");
  const [isVisible, setIsVisible] = useState(false);
  const[showDetails , setShowDetails] = useState(null);
  const activeEffect = activeDiv();

  const handleVisibility = () => {
    const rect = document.getElementById("targetDiv").getBoundingClientRect();
    const scrollLocation = rect.bottom + window.scrollY;
    const isVisible = scrollLocation <= window.innerHeight;
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    handleVisibility();

    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const handleShowDetails = (index) =>{
    if (showDetails === index){
      setShowDetails(null)
    }
    else{
      setShowDetails(index);
}
  }

  return (
    <Element name="experience" >
      <div style={{minHeight:'100vh'}}>
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

          <Typography variant="h3" fontFamily="Lobster">
            Experience
          </Typography>
          <br />
        </Stack>
        <Container maxWidth={isMobileScreen ? "xs" : "lg"}>
          <Timeline>
            {ExperienceData.map((item, index) => (
              <TimelineItem key={index} sx={{cursor:'pointer'}} onClick={()=>handleShowDetails(index)}>
                <Grid container>
                  <Grid item xs={1} display="flex" justifyContent="center">
                    <TimelineSeparator>
                      <TimelineDot
                        color={
                          index === 0
                            ? theme
                              ? "secondary"
                              : "info"
                            : "success"
                        }
                      />
                      {index !== ExperienceData.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                  </Grid>

                  <Grid item xs={11}>
                    <TimelineContent>
                      <div
                        id="targetDiv"
                        className={
                          isVisible
                            ? activeEffect.visible
                            : activeEffect.nonVisible
                        }
                      >
                        <Stack
                          direction={"row"}
                          spacing={4}
                          alignItems={"start"}
                        >
                          {!isMobileScreen && (
                            <div>
                              <img
                                src={item.logo}
                                alt="img"
                                width={100}
                                height={60}
                              />
                            </div>
                          )}
                          <div>
                            <Stack display={'flex'} width={'50vw'}
                              direction={isMobileScreen ? "column" : "row"}
                              alignItems={
                                isMobileScreen ? "flex-start" : "center"
                              }
                              justifyContent={"space-between"}
                            >
                              <Typography
                                component={Link}
                                href={item.link}
                                target="_blank"
                                variant="h5" fontWeight='bold' fontStyle={'oblique'}
                              >
                                {item.company}
                              </Typography>
                              <Typography
                                variant={isMobileScreen ? "body2" : "body1"}
                              >
                                {item.duration}
                              </Typography>
                            </Stack>

                            <Typography variant="h6">{item.role}</Typography>
                            <Typography component={Link} variant="caption" style={{ textDecoration: "underline" }}>{showDetails !==index &&item.responsibility.length !== 0  &&'Show full details'} </Typography>
                          </div>
                        </Stack>
                        <br />
                        {item.responsibility.length !== 0 
                        && showDetails===index 
                        && (
                          <Typography variant="body1">
                            <Typography style={{ textDecoration: "underline" }}>
                              Responsibility:
                            </Typography>
                            <ul type="disc">
                              {item.responsibility.map((role, ind) => (
                                <li key={ind}>{role}</li>
                              ))}
                            </ul>
                
                          </Typography>
                        )}
                        <br />
                      </div>
                    </TimelineContent>
                  </Grid>
                </Grid>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
        
      </div>
    </Element>
  );
};

export default Education;
