import { createTheme} from "@mui/material";


const dark = createTheme({
    shadows:['none'],
    palette:{
        primary:{
            main: 'rgb(0,0,0,0.5)'
        },
      // background:{
      //   default : "#212121"
      // }
    },
    typography:{
        allVariants:{
            color:'white'
        }
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
                    color:'white',
                    ":hover":{
                        color:'red'
                    }
                },
                
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    color:'white',
                    '& .MuiTabs-indicator': {
                      backgroundColor: 'red', 
                    },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color:'white',
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
         MuiListItemText:{
            styleOverrides:{
                primary:{
                    color:'white'
                },
                secondary:{
                    color:'white'
                }
            }
         },
         MuiList:{
            styleOverrides:{
              root:{
                padding:0,
                
                backgroundColor :'transparent'
              }
            }
           },
           MuiIconButton:{
            styleOverrides:{
                root:{
                    color:"wheat"
                }
            }
        },
         MuiListItem:{
            styleOverrides:{
                root:{
                    backgroundColor:'#242424',
                    border:'solid 1px black',
                    borderRadius:5,
                    marginBottom:2,
                    ":hover":{
                        backgroundColor:'#616161'
                    }
                }
            }
         }
    }
})
dark.shadows[1] = dark.shadows[0]
dark.shadows[4] = dark.shadows[0]


export default dark