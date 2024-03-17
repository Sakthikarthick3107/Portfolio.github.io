import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar";
import light from "./styles/light";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { CssBaseline, Fab } from "@mui/material";
import dark from "./styles/dark";
import { useState , useEffect} from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Events, scroller } from 'react-scroll';
import './app.css';
import FloatingBtn from "./components/FloatingBtn";
import sun from './images/sun.svg';
import moon from './images/crescent-moon.svg'



function App() {
  const [darkMode , setDarkMode] = useState(false)
  const theme =darkMode? dark : light
  const icon =  darkMode?sun:moon
    
  const handleThemeChange = () =>{
    setDarkMode((prevMode) => !prevMode)
    // localStorage.setItem('darkMode',!darkMode)
  }

  useEffect(() => {
    const shortcutTheme = (e) =>{
      if( e.shiftKey && (e.key.toLowerCase() ==='t' || e.key ==='t')){
        handleThemeChange();
      }
    }
    window.addEventListener('keydown' , shortcutTheme)
  
    return () => {
     window.removeEventListener('keydown' , shortcutTheme)
    }
  }, [])
  
  
  useEffect(() => {
    const handleScrollBegin = () => {
      console.log('Scroll begin');
      // Add your logic here for the beginning of scrolling
    };

    const handleScrollEnd = () => {
      console.log('Scroll end');
      // Add your logic here for the end of scrolling
    };

    Events.scrollEvent.register('begin', handleScrollBegin);
    Events.scrollEvent.register('end', handleScrollEnd);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 500,
      smooth: true,
      offset: -50,
    });
  };


  const styles  = {
    container :{
      backgroundColor : darkMode?'black':'white',
      backgroundImage : darkMode? `radial-gradient(at 0% 0%, hsla(276,36%,16%,1) 0px, transparent 50%),
      radial-gradient(at 76% 0%, hsla(270,54%,17%,1) 0px, transparent 50%),
      radial-gradient(at 100% 0%, hsla(262,78%,23%,1) 0px, transparent 50%),
      radial-gradient(at 22% 0%, hsla(265,58%,21%,1) 0px, transparent 50%),
      radial-gradient(at 45% 0%, hsla(260,80%,22%,1) 0px, transparent 50%)` : 
      
      `radial-gradient(at 50% 0%, hsla(181,55%,64%,1) 0px, transparent 50%),
      radial-gradient(at 95% 0%, hsla(180,64%,60%,1) 0px, transparent 50%),
      radial-gradient(at 75% 0%, hsla(195,98%,62%,1) 0px, transparent 50%),
      radial-gradient(at 22% 0%, hsla(189,91%,39%,1) 0px, transparent 50%),
      radial-gradient(at 4% 0%, hsla(199,75%,69%,1) 0px, transparent 50%)`,
      backgroundAttachment:'fixed',
      overflowX:'hidden',
    },
   
  }
  return (
    
      
      <div className="App"  style={styles.container}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        
          <NavBar   scrolltoSection={scrollToSection} />
          <Home  theme={darkMode} />
          <Experience theme={darkMode} />
          <Skills  />
          <Projects />
          <FloatingBtn onThemeChange={handleThemeChange} icon={icon} />
        </ThemeProvider>
      </div>
    
  );
}

export default App;
