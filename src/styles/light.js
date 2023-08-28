import { createTheme} from "@mui/material";

const light = createTheme({
    shadows:['none'],
    palette:{
      primary:{
        main:'rgb(255,255,255,0.5)'
      },
      
    },
    // breakpoints: {
    //   values: {
    //     xs: 400, // Mobile devices
    //     sm: 600, // Tablets and small screens
    //     md: 960, // Desktop
    //     lg: 1280, // Large desktops
    //     xl: 1920, // Extra large desktops
    //   },
    // },
    
    components:{

        MuiLink:{
            styleOverrides:{
                root:{
                    textDecoration:'none',
                    color:'black',
                    ":hover":{
                      color:'red'
                  }
                    
                },
                
            }
        },
        MuiIconButton:{
            styleOverrides:{
                root:{
                    color:"black",
                    padding:0
                }
            }
        },

        MuiTabs: {
            styleOverrides: {
                root: {
                    
                    '& .MuiTabs-indicator': {
                      backgroundColor: 'red', 
                    },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color:'black',
                '&.Mui-selected': {
                  color: 'red',

                },
              },
            },
          },

          MuiTimelineConnector:{
            styleOverrides:{
              root:{
                minHeight:'100px',

              }
            }
          },
         MuiAvatar:{
          styleOverrides:{
            root:{
              height:50,
              width:50
            }
          }
         },
         MuiCard:{
          styleOverrides: {
            root: {
                border:'solid 1px #b3e5fc',
                width:'90%',
                transition: 'transform 0.2s ease',
                ":hover":{
                  transform: 'scale(1.02)',
                }
            }
          }
         },
         MuiCardHeader:{
            styleOverrides: {
              root: {
                backgroundColor: '#42a5f5',
                
              }
            }
         },
         MuiCardMedia:{
          styleOverrides: {
            img: {
              height: 150,
              width: 150,
              display:'block',
              marginLeft:  'auto',
              marginRight:'auto'
            }
          }
         },
         MuiCardActions:{
          styleOverrides: {
            root: {
              backgroundColor: '#212121'
            }
          }
         },
         MuiButton:{
          styleOverrides: {
            contained:{
              backgroundColor: '#bdbdbd',
              borderRadius:10,
              fontSize:14,
              fontWeight:'bold',
              hover: {
                backgroundColor:'#757575',
                color:'#212121'
              }
            }
          }
         }
    }
})
light.shadows[1] = light.shadows[0]
light.shadows[4] = light.shadows[0]


export default light