import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar";
import light from "./styles/light";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { CssBaseline,  createTheme } from "@mui/material";
import dark from "./styles/dark";
import { useState , useEffect} from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Events, scroller } from 'react-scroll';


function App() {
  const [darkMode , setDarkMode] = useState(false)
  const theme = createTheme(  darkMode? dark : light)
  const icon =  createTheme(darkMode?<WbSunnyIcon/>:<DarkModeIcon/>)
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
  return (
    
      
      <div className="App" >
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <NavBar  onThemeChange={handleThemeChange} icon={icon} scrolltoSection={scrollToSection} />
        <Home/>
        <Education/>
        <Skills  />
        <Projects />
        </ThemeProvider>
      </div>
    
  );
}

export default App;
