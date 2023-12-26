import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar";
import light from "./styles/light";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { CssBaseline,  Grid,  createTheme } from "@mui/material";
import dark from "./styles/dark";
import { useState , useEffect} from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Events, scroller } from 'react-scroll';



function App() {
  const [darkMode , setDarkMode] = useState(false)
  const theme =darkMode? dark : light
  const icon =  darkMode?<WbSunnyIcon/>:<DarkModeIcon/>
    
  const handleThemeChange = () =>{
    setDarkMode((prevMode) => !prevMode)
  }

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
      background : darkMode? 'linear-gradient(135deg , #000000 , #212121 ,#000000 ,#37474f)' : 
                                                'linear-gradient( 135deg, #ffffff, #e3f2fd,#ffffff,#e0f7fa)'
    }
  }
  return (
    
      
      <div className="App"  style={styles.container}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        
          <NavBar  onThemeChange={handleThemeChange} icon={icon} scrolltoSection={scrollToSection} />
          <Home  theme={darkMode} />
          <Experience theme={darkMode} />
          <Skills  />
          <Projects />
     
        </ThemeProvider>
      </div>
    
  );
}

export default App;
