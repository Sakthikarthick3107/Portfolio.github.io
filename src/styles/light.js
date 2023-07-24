import { createTheme} from "@mui/material";

const light = createTheme({
    shadows:['none'],
    palette:{
      primary:{
        main:'rgb(255,255,255,0.5)'
      },
      // background:{
      //   default : "#f0f0f0"
      // }
    },
    breakpoints: {
      values: {
        xs: 0, // Mobile devices
        sm: 600, // Tablets and small screens
        md: 960, // Desktop
        lg: 1280, // Large desktops
        xl: 1920, // Extra large desktops
      },
    },
    
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
                    color:"black"
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
         MuiList:{
          styleOverrides:{
            root:{
              padding:0,
              
            }
          }
         },
         MuiListItem:{
          styleOverrides:{
              root:{
                border:'solid 1px black',
                borderRadius:5,
                marginBottom:2,
                  ":hover":{
                      backgroundColor:'#f0f0ea'
                  }
              }
          }
       }
    }
})
light.shadows[1] = light.shadows[0]
light.shadows[4] = light.shadows[0]


export default light