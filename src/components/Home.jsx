import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import myImage from "../images/mypic.png";
// import Item from "../styles/Item";
import Instagram from "../images/instagram.png";
import LinkedIn from "../images/linkedin.png";
import Mail from "../images/mail.png";
import github from "../images/github.png";
import IconEffect from "../styles/IconEffect";
import activeDiv from "../styles/activeDiv";

const Home = ({ theme }) => {
  const domains = [
    "Frontend Developer",
    "Backend Developer",
    "Native App Developer",
    "Web Designer",
  
  ];
  const [domainIndex, setDomainIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(domains[domainIndex]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sentence =
    "excelling in web development, mobile app development, and creative problem-solving, with a commitment to applying theoretical knowledge in practical projects and contributing to their success through effective execution and coordination.";
  const isMobileScreen = useMediaQuery("(max-width:500px)");

  const activeEffect = activeDiv();
  const effect = IconEffect();

  useEffect(() => {
    if (isTyping) {
      const typing = setInterval(() => {
        if (currentWord && currentWordIndex < currentWord.length) {
          setDisplayWord((prev) => prev + currentWord[currentWordIndex]);
          setCurrentWordIndex((prev) => prev + 1);
        }
        else {
          clearInterval(typing);
          setTimeout(() => {
            setIsTyping(false);
          }, 1000);
        }
      }, 35);
      return () => clearInterval(typing);
    } else {
      const erasing = setInterval(() => {
        if (currentWordIndex >= 0) {
          setDisplayWord((prev) => currentWord.slice(0, currentWordIndex));
          setCurrentWordIndex((prev) => prev - 1);
        } else {
          clearInterval(erasing);
          setIsTyping(true);
          setCurrentWordIndex(0);
            setDomainIndex((prev) => prev + 1);
            setCurrentWord(domains[domainIndex]);
            if (domainIndex === domains.length) {
              setDomainIndex(0);
              setCurrentWord(domains[0]);
            }
          
        }
      }, 35);
      return () => clearInterval(erasing);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setShowCursor(!showCursor);
    }, 300);
  });

  const handleVisibility = () => {
    const rect = document.getElementById("targetDiv").getBoundingClientRect();
    const isVisible =  rect.bottom <= window.innerHeight;
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    handleVisibility();

    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  return (
  
      <Box sx={{minHeight:'100vh' ,display:'flex',justifyContent:'center',
            alignItems:'center',
            backgroundAttachment:'fixed'
            }}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={5} md={5} sm={12} xs={9} textAlign="center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              <img src={myImage} alt="myImage" width={isMobileScreen?250:300} height={isMobileScreen?300:350} />
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              m={5}
            >
              <div
                id="targetDiv"
                className={
                  isVisible ? activeEffect.visible : activeEffect.nonVisible
                }
              >
                <Typography variant="h5">Hello,I am</Typography>
                <Typography
                  variant={isMobileScreen ? "h2" : "h1"}
                  sx={{
                    fontFamily: "Carattere",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  color={theme && "purple"}
                >
                  Sakthikarthick N
                </Typography>
              </div>
              <div
                id="targetDiv"
                className={
                  isVisible ? activeEffect.visible : activeEffect.nonVisible
                }
              >
                <Box
                  sx={{
                    marginBottom: 4,
                    height: 50,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography
                    variant={isMobileScreen ? "h5" : "h3"}
                    sx={{
                      fontFamily: "monospace",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      flexWrap: "wrap",
                    }}
                  >
                    {displayWord}
                  </Typography>
                  <Typography
                    variant={isMobileScreen ? "h5" : "h3"}
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 800,
                      fontSize: 30,
                    }}
                    color={theme ? "#a33bdf" : "#075cb7"}
                  >
                    {showCursor && "_"}
                  </Typography>
                </Box>
              </div>
              <div
                id="targetDiv"
                className={
                  isVisible ? activeEffect.visible : activeEffect.nonVisible
                }
              >
                <Typography variant="h5">{sentence}</Typography>
              </div>
              <br />

              <div
                id="targetDiv"
                className={
                  isVisible ? activeEffect.visible : activeEffect.nonVisible
                }
              >
                <Stack direction="row">
                  <IconButton 
                    component={Link}
                    href="https://www.instagram.com/__intelligent__psycho__/"
                    target="blank"
                  >
                    <img
                      className={effect.root}
                      src={Instagram}
                      alt="Instagram"
                    />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/sakthikarthick-nagendran-5b5050229/"
                    target="blank"
                  >
                    <img
                      className={effect.root}
                      src={LinkedIn}
                      alt="LinkedIn"
                    />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href="mailto:sakthikarthick3107@gmail.com"
                    target="blank"
                  >
                    <img className={effect.root} src={Mail} alt="Mail" />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href="https://github.com/Sakthikarthick3107"
                    target="blank"
                  >
                    <img className={effect.root} src={github} alt="Github" />
                  </IconButton>
                </Stack>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      

  );
};

export default Home;
